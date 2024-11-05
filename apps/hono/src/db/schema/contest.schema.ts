import { real, json, pgEnum, pgTable, uuid, text, integer, numeric, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const contestPermission = pgEnum("contest_permission", ["A", "W", "P", "J"]);

export const contests = pgTable("contests", {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: uuid("owner_id"),
    title: text("title"),
    settings: json("settings"),
    description: text("description"),
});

export const contestResults = pgTable("contest_results", {
    id: uuid("id").primaryKey().defaultRandom(),
    score: numeric("score").default("0"),
    rank: integer("rank"),
    ratingMutation: uuid("rating_mutation"),
});

export const problemToContests = pgTable(
    "problem_to_contest",
    {
        problemId: uuid("problem_id")
            .notNull()
            .references(() => problems.id),
        contestId: uuid("contest_id")
            .notNull()
            .references(() => contests.id),
        problemFigure: text("problem_figure"),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.problemId, t.contestId] }),
    })
);

export const userToContests = pgTable(
    "user_to_contest",
    {
        userId: uuid("user_id")
            .notNull()
            .references(() => users.id),
        contestId: uuid("contest_id")
            .notNull()
            .references(() => contests.id),
        permission: contestPermission("permission").default("W"),
        resultId: uuid("result_id")
            .notNull()
            .references(() => contestResults.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.contestId] }),
    })
);

export const contestRelations = relations(contests, ({ one, many }) => ({
    owner: one(users),
    userToContests: many(userToContests),
    problemToContests: many(problemToContests),
}));

export const problemToContestRelations = relations(problemToContests, ({ one, many }) => ({
    problem: one(problems, {
        fields: [problemToContests.problemId],
        references: [problems.id],
    }),
    contest: one(contests, {
        fields: [problemToContests.contestId],
        references: [contests.id],
    }),
}));

export const userToContestRelations = relations(userToContests, ({ one, many }) => ({
    user: one(users, {
        fields: [userToContests.userId],
        references: [users.id],
    }),
    contest: one(contests, {
        fields: [userToContests.contestId],
        references: [contests.id],
    }),
}));
