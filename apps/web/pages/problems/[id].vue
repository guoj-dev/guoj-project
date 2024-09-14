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
                    <div class="min-w-16rem flex flex-col">
                        <div class="mt-16 bg-gray-100 rounded-xl py-8 px-4">
                            <div>
                                <p class="font-bold text-sm">Tags:</p>
                                <p><span class="text-xs bg-blue text-light px-2 py-1 rounded-lg">Bruteforce</span></p>
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
