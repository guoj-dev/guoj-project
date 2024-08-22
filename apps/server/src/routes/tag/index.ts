import { db } from "@/db";
import { tags } from "@/db/schema";
import { NotFoundException } from "@/plugins/error/exceptions";
import { useElysia } from "@/setup";
import { eq } from "drizzle-orm";
import { t } from "elysia";

const route = useElysia({ prefix: "tag" })
    .get("/", async ({ logger }) => {
        const res = await db.query.tags.findMany();
        return res;
    })
    .get("/:id", async ({ params: { id }, logger }) => {
        const res = await db.query.tags.findFirst({
            where: eq(tags.id, id),
        });
        if (res) return res;
        else throw new NotFoundException("Tag not found");
    });

export default route;