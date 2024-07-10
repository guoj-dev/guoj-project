import { Elysia, type ElysiaConfig } from "elysia";
import { env } from "@/plugins/env";
import { configPlugin } from "@/plugins/config";
import { db } from "@/db";
import logger from "@/utils/logger";


const elysia = <
  const BasePath extends string = "",
  const Scoped extends boolean = false,
>(
  config?: ElysiaConfig<BasePath, Scoped>
) => new Elysia(config).use(env).use(configPlugin).decorate({ db, logger });

const useElysia = (config?: Parameters<typeof elysia>[0]) =>
  new Elysia(config) as ReturnType<typeof elysia>;

export { useElysia, elysia };
