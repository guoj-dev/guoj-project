<template>
    <div class="container mt-8 flex flex-col h-full flex-grow">
        <div class="flex flex-col flex-grow">
            <div class="mx-8">
                <div class="flex-inline align-center items-center justify-center">
                    <span class="text-3xl font-black">P-1000</span>
                    <span class="ml-4 text-3xl font-bold">A+B Problem</span>
                    <span>
                        <Badge class="ml-4 bg-green hover:bg-green/80">Approved</Badge>
                        <Badge class="ml-2 bg-yellow hover:bg-yellow/80">Easy</Badge>
                        <Badge class="ml-2 bg-blue hover:bg-blue/80">Programming Basics</Badge>
                    </span>
                </div>
                <div class="mt-4 flex">
                    <div class="pa-2 rounded-xl min-h-2rem min-w-8rem bg-gradient-to-b from-blue-300 to-cyan-300 shadow-md flex items-center justify-center">
                        <Icon name="fluent:clock-bill-16-filled" class="text-3xl left-1rem bg-gradient-to-br from-zinc-100 to-slate-200"></Icon>
                        <span class="ml-2 bottom-.5rem right-.5rem text-xl font-black text-primary-foreground">Time: 1000ms</span>
                    </div>
                    <div class="pa-2 ml-2 rounded-xl min-h-2rem min-w-8rem bg-gradient-to-b from-purple-400 to-pink-300 shadow-md flex items-center justify-center">
                        <Icon name="fluent:memory-16-filled" class="text-3xl top-.5rem left-1rem bg-gradient-to-br from-zinc-100 to-slate-200"></Icon>
                        <span class="ml-2 bottom-.5rem right-.5rem text-xl font-black text-primary-foreground">Memory: 128MiB</span>
                    </div>
                    <div class="pa-2 ml-2 rounded-xl min-h-2rem min-w-8rem  bg-gradient-to-b from-yellow-200 to-orange-400 shadow-md flex items-center justify-center">
                        <Icon name="fluent:balloon-12-filled" class="text-3xl top-.5rem left-1rem bg-gradient-to-br from-zinc-100 to-slate-200"></Icon>
                        <span class="ml-2 bottom-.5rem right-.5rem text-xl font-black text-primary-foreground">Difficulty: ~100</span>
                    </div>
                </div>
            </div>
            <div class="flex-grow h-full w-full border shadow-2xl rounded-t-3xl mt-4">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>
