import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "@/plugins/config";

export const queryClient = postgres(config.DATABASE_URL ?? "");

export const db = drizzle(queryClient, { schema });
