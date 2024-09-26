import { elysia } from "./setup";
import { routes } from "./routes";
import { config } from "./plugins/config";
import { swagger } from "@elysiajs/swagger";
import serverTiming from "@elysiajs/server-timing";
import logger from "./utils/logger";


export const app = elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "GuOJ Documentation",
          version: "0.0.0",
        },
      },
    })
  )
  .use(routes)
  .listen(config.BACKEND_PORT)
  .use(serverTiming());

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
