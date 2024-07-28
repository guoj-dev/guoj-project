<template>
    <div class="container mt-8 flex flex-col h-full flex-grow">

        <div class="flex flex-row">
            <a class="flex mr-4 h-full max-w-20vw w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md from-slate-500 to-gray"
                href="/">
                <img src="/logo.svg" class="h-12 w-12">
                <div class="mb-2 mt-4 text-lg font-medium">
                    Main Problem Set
                </div>
                <p class="text-sm leading-tight text-muted-foreground">
                    Selected by GuOJ members, free to play.
                </p>
            </a>
            <div class="flex-grow rounded-md border shadow-md pa-4">
                <h1 class="font-bold text-xl">
                    <Icon name="fluent:lightbulb-person-28-filled" class="text-size-3xl" />
                    筛选
                </h1>
            </div>
        </div>
        <div class="flex flex-col flex-grow mt-8">
            <div class="flex-grow h-full w-full border shadow-2xl rounded-t-3xl">

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>
