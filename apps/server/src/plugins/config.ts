import { z } from "zod";
import { Elysia } from "elysia";
import rawConfig from '../../../../config.json';



const configScheme = z.object({
    PROD: z.boolean(),
    DATABASE_URL: z.string(),
    BACKEND_PORT: z.number(),
    API_PREFIX: z.string()
})

const config = configScheme.parse(rawConfig);

const configPlugin = () => {
  const app = new Elysia({
    name: "config",
  });

  const config = configScheme.parse(rawConfig);

  return app.decorate("config", {
    config,
  });
};

export { config, configPlugin };
