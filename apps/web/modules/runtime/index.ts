import { createResolver, defineNuxtModule, addPlugin } from "@nuxt/kit";

export default defineNuxtModule({
    setup() {
        const resolver = createResolver(import.meta.url);

        addPlugin({
            src: resolver.resolve("./unocss.ts"),
            mode: "client",
        });
    },
});
