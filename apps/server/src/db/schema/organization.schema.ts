import { integer, pgTable, primaryKey, uuid, text, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problemsets } from "./problemset.schema";

export const organizationRole = pgEnum("organizationRole", ["G", "U", "A", "R"]); // Guest, User, Admin, Root

export const organizations = pgTable("organization", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    avatar: text("avatar"),
});

export const organizationMember = pgTable(
    "organization_member",
    {
        userId: uuid("user_id")
            .notNull()
            .references(() => users.id),
        organizationId: uuid("organization_id")
            .notNull()
            .references(() => organizations.id),
        organizationRole: organizationRole("organization_role"),
    },
    (t) => ({ pk: primaryKey({ columns: [t.userId, t.organizationId] }) })
);

export const organizationRelations = relations(organizations, ({ one, many }) => ({
    organizationMember: many(organizationMember),
    problemset: many(problemsets),
}));

export const organizationMemberRelation = relations(organizationMember, ({ one }) => ({
    user: one(users, {
        fields: [organizationMember.userId],
        references: [users.id],
    }),
    organization: one(organizations, {
        fields: [organizationMember.organizationId],
        references: [organizations.id],
    }),
}));
