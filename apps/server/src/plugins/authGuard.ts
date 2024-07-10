import { lucia } from "@/utils/auth";
import { Elysia, t } from "elysia";
import { type User, type Session, verifyRequestOrigin } from "lucia";
import { ForbiddenException, UnauthorizedException } from "./error/exceptions";

const sessionCookieName = lucia.sessionCookieName;

const authGuard = new Elysia({
  name: "authGuard",
})
  .guard({
    cookie: t.Object({
      [sessionCookieName]: t.Optional(t.String()),
    }),
    headers: t.Object({
      origin: t.Optional(t.String()),
      host: t.Optional(t.String()),
      authorization: t.Optional(t.String()),
    }),
  })
  .resolve(
    { as: "scoped" },
    async ({
      cookie,
      headers: { origin, host, authorization },
      request: { method },
    }): Promise<{ user: User,session: Session }> => {
      // CSRF check
      if (method !== "GET") {
        const originHeader = origin;
        // NOTE: You may need to use `X-Forwarded-Host` instead
        const hostHeader = host;
        if (
          !originHeader ||
          !hostHeader ||
          !verifyRequestOrigin(originHeader, [hostHeader])
        ) {
          throw new ForbiddenException("Invalid origin");
        }
      }

      const sessionCookie = cookie[sessionCookieName];
      const sessionId: string | null | undefined =
        lucia.readBearerToken(authorization ?? "") ?? sessionCookie?.value;
      if (!sessionId) {
        throw new UnauthorizedException();
      }

      const { session, user } = await lucia.validateSession(sessionId);

      if (!session) {
        const newSessionCookie = lucia.createBlankSessionCookie();
        sessionCookie?.set({
          value: newSessionCookie.value,
          ...newSessionCookie.attributes,
        });
        throw new UnauthorizedException();
      }

      if (session?.fresh) {
        const newSessionCookie = lucia.createSessionCookie(sessionId);
        sessionCookie?.set({
          value: newSessionCookie.value,
          ...newSessionCookie.attributes,
        });
      }

      return { user, session };
    },
  );

export { authGuard };
