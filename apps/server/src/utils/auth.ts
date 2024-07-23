import { Lucia, TimeSpan } from "lucia";
import type { User, Session } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "@/db";
import { users, sessions } from "@/db/schema/user.schema";
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

import { verifyRequestOrigin } from "lucia";
import { Elysia } from "elysia";
import logger from "./logger";
import { config } from "@/plugins/config";

export const authAdapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(authAdapter, {
  sessionExpiresIn: new TimeSpan(2, "w"),
  sessionCookie: {
    name: "session",
    expires: false,
    attributes: {
      secure: config.PROD ?? false,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.name,
      email: attributes.email,
    };
  },
});

export const isValidEmail = (email: string) => {
  return Value.Check(
    Type.String({
      format: "email",
    }),
    email
  );
};

/*
export const validateSession = async (
  sessionId: string
): Promise<
  { user: User; session: Session } | { user: null; session: null }
> => {
  if (!sessionId) return { user: null, session: null };
  return lucia.validateSession(sessionId);
};
*/

interface DatabaseUserAttributes {
  name: string;
  email: string;
}

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    UserId: string;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}



