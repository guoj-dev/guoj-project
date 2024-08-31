import {
    integer,
    json,
    pgEnum,
    pgTable,
    primaryKey,
    uuid,
    text,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problemTags } from "./problemset.schema";

export const tagStatusEnum = pgEnum("tag_status", ["official", "approved", "pending", "graveyard", "deleted"])

export const tags = pgTable("tags", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    status: tagStatusEnum("tag_status"),
    creator: uuid("creator").references(() => users.id, { onDelete: "set null" }),
});

export const tagRelations = relations(tags, ({ one, many }) => ({
    creator: one(users, {
        fields: [tags.creator],
        references: [users.id]
    }),
    problemTags: many(problemTags),
    tagVotes: many(tagVotes)
}));

export const tagVotes = pgTable("tag_votes", {
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade"}),
    tagId: uuid("tag_id").references(() => tags.id, {onDelete: "cascade"}),
    score: integer("score").default(1)
})

export const tagVotesRelations = relations(tagVotes, ({one}) => ({
    user: one(users),
    tag: one(tags),
}))