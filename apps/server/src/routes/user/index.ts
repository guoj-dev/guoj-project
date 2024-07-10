import { useElysia } from "@/setup";
import { t } from "elysia";
import auth from "./auth";
import { authGuard } from "@/plugins/authGuard";
import { me } from "./me";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import { NotFoundException } from "@/plugins/error/exceptions";

const user = useElysia({ prefix: "user" })
  .use(me)
  .use(auth)
  .get("", async () => {}, { tags: ["user"] })
  .get(
    "/:id",
    async ({ params: { id }, logger }) => {
      const user = await db.query.users.findFirst({
        where: eq(users.id, id),
      });
      if (user) return user;
      else throw new NotFoundException("User not found.");
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
      tags: ["user"],
    },
  );

export default user;
