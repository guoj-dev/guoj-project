import Elysia from "elysia";
import user from "./user";
import { useElysia } from "@/setup";

export const routes = useElysia().all('/', ()=>'This is the GuOJ API endpoint, version 0.0.1')
                                    .use(user);

