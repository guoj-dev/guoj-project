import { real, json, pgEnum, pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const discussions = pgTable("discussions", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    content: text("content"),
    userId: uuid("user_id").notNull().references(() => users.id),
});
