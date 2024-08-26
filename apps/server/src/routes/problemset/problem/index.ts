import { useElysia } from "@/setup";
import { t } from "elysia";
import { db } from "@/db";
import { NotFoundException } from "@/plugins/error/exceptions";
import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { problems, problemsets } from "@/db/schema";

export const problem = useElysia({ prefix: "problem" }).get(
    "/:id",
    async ({ params: { id } }) => {
        const idSchema = z.string().uuid();
        try {
            if (idSchema.safeParse(id).success) {
                const problem = db.query.problems.findFirst({
                    where: eq(problems.id, id),
                });
                if (problem) return problem;
                else throw new NotFoundException("Problem not found.");
            } else {
                const [prefix, digit] = id.split("-");
                const problem = await db.select().from(problemsets).rightJoin(problems, and(eq(problemsets.id, problems.problemsetId), eq(problemsets.prefix, prefix), eq(problems.problemid, Number(digit))));
                if (problem) return problem;
                else throw new NotFoundException("Problem not found.");
            }
        } catch {
            throw new NotFoundException("Problem not found.");
        }
    },
    {
        params: t.Object({
            id: t.String(),
        }),
        tags: ["user"],
    }
);
