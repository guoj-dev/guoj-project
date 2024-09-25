import { real, json, pgEnum, pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const contestPermission = pgEnum("contest_permission", ["A", "W", "P", "J"]);

export const contests = pgTable("contests", {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: uuid("owner_id"),
    title: text("title"),
    settings: json("settings"),
    description: text("description")
});

export const problemToContest = pgTable("problem_to_contest", {
    problemId: uuid("problem_id").notNull().references(() => problems.id),
    contestId: uuid("contest_id").notNull().references(() => contests.id),
});

export const userToContest = pgTable("user_to_contest", {
    userId: uuid("user_id").notNull().references(() => users.id),
    contestId: uuid("contest_id").notNull().references(() => contests.id),
    permission: contestPermission("permission")
})
