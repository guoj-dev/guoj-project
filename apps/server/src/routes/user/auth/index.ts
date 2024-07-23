import { error, t } from "elysia";
import { isValidEmail, lucia } from "../../../utils/auth";
import { db } from "../../../db";
import { users } from "../../../db/schema";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from "@/plugins/error/exceptions";
import { useElysia } from "@/setup";
import { generateId } from "lucia";

const auth = useElysia({ prefix: "auth" })
  .post(
    "/login",
    async ({ body, cookie, set, logger }) => {
      const user = await db.query.users.findFirst({
        where: eq(
          isValidEmail(body.user) ? users.email : users.name,
          body.user,
        ),
        with: {
          auth: true,
        },
      });
      if (!user) {
        logger.error("User not found.");
        throw new BadRequestException("User not found.");
      }
      if (!user.auth?.passwordLogin) {
        logger.error("Password login disabled.");
        throw new BadRequestException("Password login disabled.");
      }
      const isValidPassword = await Bun.password.verify(
        body.password,
        user.auth?.hashedPassword || "",
      );
      if (!isValidPassword) {
        logger.error("Invalid username, email or password.");
        throw new BadRequestException("Invalid username, email or password.");
      }

      const session = await lucia.createSession(user.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      set.status = 200;

      cookie[sessionCookie.name]?.set({
        value: sessionCookie.value,
        ...sessionCookie.attributes,
      });

      return {
        id: user.id,
        email: user.email || "",
        name: user.name || "",
      };
    },
    {
      body: t.Object({
        user: t.String(),
        password: t.String(),
      }),
      response: t.Object({
        id: t.String(),
        email: t.String(),
        name: t.String(),
      }),
      detail: {
        description:
          "The signin endpoint, will authenticate a user and create a session.",
      },
      tags: ["user", "auth"],
    },
  )
  .post(
    "/logout",
    async ({ cookie, logger }) => {
      const sessionCookie = cookie[lucia.sessionCookieName];

      if (!sessionCookie?.value) {
        logger.error("Session not found");
        throw new BadRequestException("Session not found");
      }

      await lucia.invalidateSession(sessionCookie.value);
      const blankSessionCookie = lucia.createBlankSessionCookie();

      sessionCookie.set({
        value: blankSessionCookie.value,
        ...blankSessionCookie.attributes,
      });

      return { message: "Successfully signed out" };
    },
    {
      detail: {
        description:
          "The signout endpoint, will invalidate the user's session and clear the session cookie.",
      },
      response: t.Object({
        message: t.String(),
      }),
      tags: ["user", "auth"],
    },
  )
  .post(
    "/register",
    async ({ body: { name, email, password }, logger, cookie, set }) => {
      logger.info({ name, email }, "Signup request");
      const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email),
      });

      if (existingUser) {
        logger.error(
          { name, email, id: existingUser.id },
          "User already exists",
        );
        throw new ConflictException("User already exists");
      }

      const hashedPassword = await Bun.password.hash(password);

      try {
        const userId = await db.transaction(async (tx) => {
          const userRes = await tx
            .insert(users)
            .values({
              name: name,
              email: email,
            })
            .returning({ userId: users.id });
          await tx.insert(schema.auth).values({
            user: userRes[0].userId,
            preferredStrategy: "password",
            passwordLogin: true,
            hashedPassword: hashedPassword,
          });
          await tx.insert(schema.userProfiles).values({
            user: userRes[0].userId,
          });
          return userRes[0].userId;
        });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);

        set.status = 201;
        cookie[sessionCookie.name]?.set({
          value: sessionCookie.value,
          ...sessionCookie.attributes,
        });

        logger.info({ name, email, id: userId }, "User created");
        return {
          id: userId,
          email,
          name,
        };
      } catch (error) {
        logger.error(error);
        throw new InternalServerErrorException();
      }
    },
    {
      body: t.Object({
        name: t.String({
          description: "The username of the user",
        }),
        email: t.String({
          description: "The email of the user",
        }),
        password: t.String({
          description: "The password of the user",
          minLength: 8,
        }),
      }),
      response: t.Object({
        id: t.String(),
        email: t.String(),
        name: t.String(),
      }),
      detail: {
        description:
          "The signup endpoint, will create a new user in the database. Throws a 409 if the user already exists.",
      },
    },
  );

export default auth;
