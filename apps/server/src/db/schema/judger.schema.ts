import { real, json, pgEnum, pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";
import { problems } from "./problemset.schema";

export const judgers = pgTable("judgers", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name"),
    
})