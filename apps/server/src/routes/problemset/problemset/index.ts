import { db } from "@/db";
import { problemsets } from "@/db/schema";
import { NotFoundException } from "@/plugins/error/exceptions";
import { useElysia } from "@/setup";
import { eq } from "drizzle-orm";
import { t } from "elysia";

export const problemset = useElysia({ prefix: "problemset" }).get(
    "/:id",
    async ({ params: { id }, logger }) => {
        try {
            const problemset = db.query.problemsets.findFirst({
                where: eq(problemsets.id, id),
            });
            if (problemsets) return problemset;
            else throw new NotFoundException("Problemset not found");
        } catch {
            throw new NotFoundException("Problemset not found");
        }
    },
    {
        params: t.Object({
            id: t.String(),
        }),
        tags: ["user"],
    }
);