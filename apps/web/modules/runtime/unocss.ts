import initUnocssRuntime from "@unocss/runtime";
import { presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { builtinColors, presetShadcn } from "unocss-preset-shadcn";

export default defineNuxtPlugin({
    name: "my-plugin",
    enforce: "pre", // or 'post'
    async setup() {
        console.log("Loading UnoCSS...");
        initUnocssRuntime({
            defaults: {
                theme: {
                    colors: {
                        // ...
                    },
                },
                presets: [
                    presetUno(),
                    presetAttributify(),
                    presetIcons(),
                    presetTypography(),
                    presetWebFonts({
                        fonts: {
                            // ...
                        },
                    }),
                    presetAnimations(),
                    presetShadcn(builtinColors.map((c) => ({ color: c }))),
                ],
            },
        });
    },
});
