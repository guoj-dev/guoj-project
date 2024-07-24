import { useElysia } from "@/setup";
import { problemset } from "./problemset";
import { problem } from "./problem";

const route = useElysia().use(problemset).use(problem)

export default route
