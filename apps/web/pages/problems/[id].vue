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

                </div>
            </div>
            <div class="flex-grow h-full w-full border shadow-2xl rounded-t-3xl mt-4 relative overflow-hidden">
                <div class="mx-10 mt-8 font-medium text-xs">
                    <span>P-1000</span>
                    <span class="mx-2">/</span>
                    <span>Description.md</span>
                </div>
                <div class="mx-8 flex">
                    <Editor readonly class="flex-grow"></Editor>
                    <div class="min-w-16rem flex flex-col mt-12">
                        <div class="mt-4 bg-gray-100 rounded-xl pa-4">
                            <div>
                                <p class="font-black text-md">Author</p>
                                <div>       </div>
                            </div>
                        </div>
                        <div class="divider mt-4 w-full border"></div>
                        <div class="mt-4 bg-gray-100 rounded-xl pa-4">
                            <div>
                                <p class="font-bold text-sm">Tags</p>
                                <p class="block break-words border-box max-w-16rem mt-1">
                                    <span
                                        class="inline-block text-xs bg-blue text-light px-2 py-1 rounded-lg mr-1 mb-1 inline-flex items-center justify-center">Approved</span>
                                    <span
                                        class="inline-block text-xs bg-blue text-light px-2 py-1 rounded-lg mr-1 mb-1 inline-flex items-center justify-center">Bruteforce</span>
                                    <span
                                        class="inline-block text-xs bg-blue text-light px-2 py-1 rounded-lg mr-1 mb-1 inline-flex items-center justify-center">Easy</span>
                                    <span
                                        class="inline-block text-xs bg-blue text-light px-2 py-1 rounded-lg mr-1 mb-1 inline-flex items-center justify-center">Programming
                                        Basics</span>
                                    <span
                                        class="inline-block text-xs bg-blue text-light px-2 py-1 rounded-lg mr-1 mb-1 inline-flex items-center justify-center">Bruteforce</span>
                                </p>
                            </div>
                        </div>
                        <div class="divider mt-4 w-full border"></div>
                        <div class="mt-4 bg-gray-100 rounded-xl pa-4">
                            <div>
                                <p class="font-black text-md">Problem Settings</p>
                                <p class="my-1">
                                    <span class="text-xs bg-amber text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center mr-1">
                                        🛠️ Input Setting Set :
                                    </span>
                                    <span
                                        class="text-xs bg-cyan hover:bg-cyan-300 text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center">
                                        Standard
                                        <Icon name="ic:baseline-launch"></Icon>
                                    </span>
                                </p>
                                <p class="my-1">
                                    <span class="text-xs bg-emerald text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center mr-1">
                                        🕗 Time Limit: 
                                    </span>
                                    <span
                                        class="text-xs bg-orange text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center">
                                        1000ms
                                    </span>
                                </p>
                                <p class="my-1">
                                    <span class="text-xs bg-fuchsia text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center mr-1">
                                        🗃️ Memory Limit: 
                                    </span>
                                    <span
                                        class="text-xs bg-red text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center">
                                        128MiB
                                    </span>
                                </p>
                                <p class="my-1">
                                    <span class="text-xs bg-pink text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center mr-1">
                                        🤖 Jury:
                                    </span>
                                    <span
                                        class="text-xs bg-cyan-300 text-light px-2 py-1 font-bold rounded-lg inline-flex items-center justify-center">
                                        Custom
                                        <Icon name="ic:baseline-launch"></Icon>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">


</script>
<style scoped></style>
