// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["shadcn-nuxt", "@unocss/nuxt", "@nuxt/icon", '@pinia/nuxt','@vueuse/motion/nuxt','./modules/runtime'],
    css: ['@unocss/reset/tailwind.css', './assets/css/tailwind.css'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
    nitro: {
        devProxy: {
            "/backend-api": { target: "http://localhost:3001", changeOrigin: true, },
        },
    },
    experimental: {
        cookieStore: true,
    },
    pinia: {
        storesDirs: ['./stores/**'],
    }
});
  