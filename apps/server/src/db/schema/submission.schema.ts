import { real, json, pgEnum, pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const submissionStatus = pgEnum("submission_status", [
    "P", // Pending
    "C", // Custom (in context)
    "CE", // Compile Error
    "AC", // Accepted
    "WA", // Wrong Answer
    "TLE", // Time Limit Exceeded
    "MLE", // Memory Limit Exceeded
    "RE", // Runtime Error
    "H", // Hacked
]);

export const submissions = pgTable("submissions", {
    id: uuid("id").primaryKey().defaultRandom(),
    author: uuid("author").references(() => users.id, { onDelete: "cascade" }),
    problem: uuid("problem").references(() => problems.id, {
        onDelete: "cascade",
    }),
    code: text("code"),
    score: real("score").default(0),
    status: submissionStatus("status"),
    context: json("status"),
});

export const submissionRelations = relations(submissions, ({ one }) => ({
    author: one(users),
    problem: one(problems),
}));
