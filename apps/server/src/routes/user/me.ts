import { useElysia } from "@/setup";
import { authGuard } from "@/plugins/authGuard";

export const me = useElysia({ prefix: '/me'})
  .use(authGuard)
  .get(
    "",
    async ({ user }) => {
      return { id: user.id, username: user.username, email: user.email };
    },
    { tags: ["user"] },
  );
