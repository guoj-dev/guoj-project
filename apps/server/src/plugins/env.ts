import { z } from "zod";
import { Elysia } from "elysia";

const env = () => {
  const app = new Elysia({
    name: "env",
  });

  const env = process.env;

  return app.decorate("env", {
    ...env,
    env: process.env,
  });
};

export { env };
