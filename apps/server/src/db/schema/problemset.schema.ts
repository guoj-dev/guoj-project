import { integer, json, pgEnum, pgTable, uuid, text, time, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { organizations } from "./organization.schema";
import { tags } from "./tag.schema";
import { submissions } from "./submission.schema";

// problemsets and problems

export const problemPermission = pgEnum("problem_permission", ["P", "RO", "R"]);
// P for Private or Protected, only collaborators or owners can view or edit the problem, RO for view the problem body only and no submissions.

export const problemsetStatus = pgEnum("problemset_status", ["O", "A", "P", "p", "h"]) // Official, Authorized, Public, Private, Hidden
export const problemCollaborationPermission = pgEnum("problem_collaboration_permission", ["RO", "R", "RW", "RWA"]); // The owner of the problem has RWA permission by default.
export const problemsetCollaborationPermission = pgEnum("problem_collaboration_permission", ["RO", "R", "RW", "RWA"]);
/* 
Permissions:
    RO: Can only view the problem, can't submit any solution.
    R: Can view the problem, and submit solutions.
    RW: Can view and make changes to the problem(Of course you can submit solutions), can't change the settings
    RWA: Only thing you cannot do is change the owner of the problem.(Only the owner can do that)
*/

export const problems = pgTable("problems", {
    id: uuid("id").primaryKey().defaultRandom(), //global id
    problemsetId: uuid("problemset_id").references(() => problemsets.id, { onDelete: "cascade" }),
    problemid: integer("pid"),
    name: text("name"),
    config: json("config"),
    body: text("body"),
    createdAt: time("created_at").defaultNow(),
    author: text("author"), // Only an attribute to show the respect to the original creator.
    problemPermission: problemPermission("problem_permission").$default(() => "R"),
});

export const problemTags = pgTable("problem_tags", {
    id: uuid("id").primaryKey().defaultRandom(),
    problemId: uuid("problem_id").references(() => problems.id, {
        onDelete: "cascade",
    }),
});

export const tagToProblemTag = pgTable(
    "tag_to_problem_tag",
    {
        tagId: uuid("tag_id")
            .notNull()
            .references(() => tags.id),
        problemTagId: uuid("problem_tag_id")
            .notNull()
            .references(() => problemTags.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.tagId, t.problemTagId] }),
    })
);

export const problemCollaborations = pgTable("problem_collaborations", {
    id: uuid("id").primaryKey().defaultRandom(),
    problemId: uuid("problem_id").references(() => problems.id, {
        onDelete: "cascade",
    }),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    permission: problemCollaborationPermission("permission").default("RO"),
});

export const problemRelations = relations(problems, ({ one, many }) => ({
    problemToProblemSet: one(problemsets, {
        fields: [problems.problemsetId],
        references: [problemsets.id],
    }),
    problemTags: many(problemTags),
    problemCollaborations: many(problemCollaborations),
    submissions: many(submissions),
}));

export const problemTagRelation = relations(problemTags, ({ one, many }) => ({
    problems: one(problems),
    tagToProblemTag: many(tagToProblemTag),
}));

export const tagToProblemTagRelation = relations(tagToProblemTag, ({ one, many }) => ({
    tag: one(tags, {
        fields: [tagToProblemTag.tagId],
        references: [tags.id],
    }),
    problemTag: one(problemTags, {
        fields: [tagToProblemTag.problemTagId],
        references: [problemTags.id],
    }),
}));

export const problemsets = pgTable("problemset", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    config: json("config"),
    prefix: text("prefix"),
    ownerId: uuid("owner_id"),
    problemsetStatus: problemsetStatus("problemset_status")
});

export const problemsetCollaborations = pgTable("problemset_collaborations", {
    id: uuid("id").primaryKey().defaultRandom(),
    problemsetId: uuid("problemset_id").references(() => problemsets.id, {
        onDelete: "cascade",
    }),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
    permission: problemsetCollaborationPermission("permission").default("RO"),
});

export const problemsetRelations = relations(problemsets, ({ one, many }) => ({
    userOwner: one(users, {
        fields: [problemsets.ownerId],
        references: [users.id],
    }),
    organizationOwner: one(organizations, {
        fields: [problemsets.ownerId],
        references: [organizations.id],
    }),
    problemsetCollaborations: many(problemsetCollaborations),
    problems: many(problems),
}));
