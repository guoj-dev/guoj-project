import { real, json, pgEnum, pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const discussions = pgTable("judgers", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    
})