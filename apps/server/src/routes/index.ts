import user from "./user";
import tag from "./tag";
import problemset from "./problemset";
import { useElysia } from "@/setup";

export const routes = useElysia().all('/', ()=>'This is the GuOJ API endpoint, version 0.0.0')
                                    .use(user)
                                    .use(tag)
                                    .use(problemset);

