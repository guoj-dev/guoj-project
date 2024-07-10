import type { App } from "./";
import config from "../../../config.json";

import { edenFetch } from "@elysiajs/eden";

const fetch = edenFetch<App>(`http://${config.FRONTEND_HOST}:${config.FRONTEND_PORT}`);

export default fetch;
