import { useElysia } from "@/setup";
import { t } from "elysia";
import { db } from "@/db";
import { NotFoundException } from "@/plugins/error/exceptions";
import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { problems } from "@/db/schema";

export const problem = useElysia({ prefix: "problem" }).get(
    "/:id",
    async ({ params: { id }, logger }) => {
        const idSchema = z.string().uuid();
        if (idSchema.safeParse(id).success) {
            const problem = db.query.problems.findFirst({
                where: eq(problems.id, id),
            });
            if (problem) return problem;
            else throw new NotFoundException("Problem not found.");
        } else {
            const [prefix, digit] = id.split("-");
            const problem = db.query.problems.findFirst({
                where: and(eq(problems.prefix, prefix), eq(problems.problemid, Number(digit))),
            });
            if (problem) return problem;
            else throw new NotFoundException("Problem not found.");
        }
    },
    {
        params: t.Object({
            id: t.String(),
        }),
        tags: ["user"],
    }
);
