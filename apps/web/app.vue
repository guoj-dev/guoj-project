<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import initUnocssRuntime from '@unocss/runtime'
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";
import presetAnimations from "unocss-preset-animations";
import { builtinColors, presetShadcn } from "unocss-preset-shadcn";
import { useAuthStore } from './store/auth';

const auth = useAuthStore();

const route = useRoute()

const session = useCookie('session')

onMounted(() => {
    auth.refresh();
})

initUnocssRuntime({
    defaults: {
        shortcuts: [
            // ...
        ],
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
    }
})

</script>



<template>
    <div class="flex min-h-screen flex-col bg-background">
        <Bread></Bread>
        <header class="global-header flex sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
            v-show="route.meta.topbar === undefined || route.meta.topbar === true">
            <div class="container flex h-14 max-w-screen-2xl items-center align-center">
                <div class="global-header-site-title" href="/">GuOJ</div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>ProblemSet</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul
                                    class="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                                    <li class="row-span-3">
                                        <NavigationMenuLink as-child>
                                            <a class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md from-slate-500 to-gray"
                                                href="/">
                                                <img src="/logo.svg" class="h-12 w-12">
                                                <div class="mb-2 mt-4 text-lg font-medium">
                                                    Main Problem Set
                                                </div>
                                                <p class="text-sm leading-tight text-muted-foreground">
                                                    Selected by GuOJ members, free to play.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    <li>
                                        <NavigationMenuLink as-child>
                                            <a href="/"
                                                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div class="text-sm font-medium leading-none">My Problem Set</div>
                                                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Your very own problem set, owned by you, can be shared by you.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink as-child>
                                            <a href="/"
                                                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div class="text-sm font-medium leading-none">Organization Problem Set
                                                </div>
                                                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Problem set owned by your organization.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink as-child>
                                            <a href="/"
                                                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                <div class="text-sm font-medium leading-none">Problem List</div>
                                                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Selected by our users, help you learn and improve.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <li
                                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <a>
                                            <div class="text-sm font-medium leading-none">Forum</div>
                                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">A forum
                                                to share your idea, and
                                                your life.</p>
                                        </a>
                                    </li>
                                    <li
                                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <a>
                                            <div class="text-sm font-medium leading-none">Timeline</div>
                                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">A federal
                                                timeline to share
                                                your life and your very own thoughts.</p>
                                        </a>
                                    </li>
                                    <li
                                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <a>
                                            <div class="text-sm font-medium leading-none">Wiki</div>
                                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">Sharing
                                                your knowledge has
                                                never been so easy.</p>
                                        </a>
                                    </li>
                                    <li
                                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <a>
                                            <div class="text-sm font-medium leading-none">Blog</div>
                                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">Write and
                                                share in a complete
                                                new way, with powerful in-line comments.</p>
                                        </a>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem class=" hidden lg:block">
                            <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="/">Contests
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>
                <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end h-8">
                    <div class="relative hidden lg:block"><Input id="name" placeholder="Search here"
                            class="global-search"></Input>
                        <kbd class="command-key">
                            <span class="text-xs">⌘</span>+ /</kbd>
                    </div>
                    <Separator orientation="vertical" class="h-full" />
                    <UserNav></UserNav>
                </div>
            </div>



        </header>

        <NuxtPage />

    </div>

</template>

<style>
#app {
    box-sizing: border-box;
}

.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem;
    padding-left: 2rem;
}

.global-header {
    box-sizing: border-box
}

.global-header-site-title {
    @apply font-sans m-2 text-xl font-bold mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x-1 xl:space-x-2;
    user-select: none;
    cursor: pointer;
}

.global-search {
    @apply inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64;

}

.command-key {
    @apply pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6px;
    margin: auto;
}
</style>
