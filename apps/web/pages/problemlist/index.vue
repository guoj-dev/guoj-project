<template>
    <div class="container flex flex-col flex-grow h-full">
        <div class="flex mt-16">
            <div class="min-h-16rem min-w-32rem flex-grow bg-gradient-to-br from-slate to-muted/50 relative rounded-xl pa-4 flex items-end overflow-hidden shadow-lg border">
                <div class="dot-background absolute top-0 bottom-0 left-0 right-0"></div>
                <div class="ml-a flex flex-col">
                    <Icon name="fluent:task-list-square-16-filled" class="ml-a text-6xl"></Icon>
                    <p class="ml-a text-3xl font-bold">Problem Lists</p>
                    <p class="ml-a font-light">Selected by our community, trusted by our community</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dot-background {
    inset: 0;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 256 256'><path fill='rgb(0 0 0 / 0.1)' stroke='' d='M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12'/></svg>")
}
</style>
