import type { App } from "./";
import { treaty } from "@elysiajs/eden";
import config from "../../../config.json";

import { edenFetch } from "@elysiajs/eden";

export const fetch = edenFetch<App>(`http://${config.FRONTEND_HOST}:${config.FRONTEND_PORT}`);
export const client = treaty<App>("localhost:3000");

export default fetch;
