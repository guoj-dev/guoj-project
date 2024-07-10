import {
    uuid,
    text,
    timestamp,
    pgTable,
    integer,
    boolean,
    pgEnum,
    date,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { organizationMember } from "./organization.schema";
import {
    problemCollaborations,
    problemsetCollaborations,
    problemsets,
} from "./problemset.schema";
import { submissions } from "./submission.schema";

export const globalRoleEnum = pgEnum("global_role", ["user", "admin"]);

export const genderEnum = pgEnum("sex", ["male", "female", "other"]);

export const localeEnum = pgEnum("locale", ["zh-CN", "en_US"]);

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").unique().notNull(),
    nickname: text("nickname"),
    email: text("email").unique().notNull(),
    emailVerified: timestamp("email_verified"),
    avatar: text("avatar"),
    globalRole: globalRoleEnum("global_role"),
    sex: genderEnum("sex"),
    locale: localeEnum("locale"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").$onUpdate(() => sql`now()`),
});

export const userRelations = relations(users, ({ one, many }) => ({
    auth: one(auth, {
        fields: [users.id],
        references: [auth.user],
    }),
    profile: one(userProfiles, {
        fields: [users.id],
        references: [userProfiles.user],
    }),
    problemCollaborations: many(problemCollaborations),
    problemset: many(problemsets),
    problemsetCollaborations: many(problemsetCollaborations),
    organizationMember: many(organizationMember),
    submissions: many(submissions),
}));

export const authStrategyEnum = pgEnum("auth_strategy", ["password"]);

export const auth = pgTable("auth", {
    id: uuid("id").primaryKey().defaultRandom(),
    user: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    preferredStrategy: authStrategyEnum("preferred_strategy"),
    hashedPassword: text("hashed_password"),
    passwordLogin: boolean("password_login"),
});

export const userProfiles = pgTable("user_profiles", {
    id: uuid("id").primaryKey().defaultRandom(),
    user: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    birthDate: date("birth_date"),
    bio: text("bio"),
    description: text("description"),
    location: text("location"),
});

export const sessions = pgTable("sessions", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date",
    }).notNull(),
});
