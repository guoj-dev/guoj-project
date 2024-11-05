import { real, json, pgEnum, pgTable, uuid, text, primaryKey, decimal, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { contestResults } from "./contest.schema";

export const ratings = pgTable("ratings", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    userId: uuid("user_id")
        .notNull()
        .references(() => users.id),
    rating: decimal("rating"),
});

export const ratingMutations = pgTable("ratingMutations", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    ratingId: uuid("rating_id")
        .notNull()
        .references(() => ratings.id),
    timestamp: timestamp("timestamp").defaultNow(),
    offset: decimal("offset"),
    contestResultId: uuid("contest_result_id")
        .notNull()
        .references(() => contestResults.id),
});

export const ratingRelations = relations(ratings, ({ one, many }) => ({
    user: one(users),
    ratingMutations: many(ratingMutations),
}));
