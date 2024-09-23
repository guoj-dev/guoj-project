import { real, json, pgEnum, pgTable, uuid, text, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problemsets } from "./problemset.schema";
import { organizations } from "./organization.schema";

export const judgerOwner = pgTable("judger_owner", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id),
    organizationId: uuid("organization_id").references(() => organizations.id),
});

export const judgers = pgTable("judgers", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    token: text("token"),
    owner: uuid("owner").references(() => judgerOwner.id, { onDelete: "cascade" }),
    assignmentId: uuid("assignment_id").references(() => judgerAssignment.id, { onDelete: "cascade" }),
});

export const judgerAssignment = pgTable("judger_assignment", {
    id: uuid("id").primaryKey().defaultRandom(),
});

export const assignmentToProblemset = pgTable(
    "assignment_to_problemset",
    {
        assignmentId: uuid("assignment_id")
            .notNull()
            .references(() => users.id),
        problemsetId: uuid("problemset_id")
            .notNull()
            .references(() => problemsets.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.assignmentId, t.problemsetId] }),
    })
);
