<template>
    <div class="container flex flex-col flex-grow h-full">
        <div class="flex flex-col flex-grow h-full w-full">
            <div>
                <div class="h-14rem border-x overflow-hidden relative">

                </div>
                <div class="pt-4 pb-8 border grid grid-cols-2 rounded-b-xl px-24">
                    <div class="user-heading flex items-center bottom-1rem left-3rem">
                        <Avatar class=""></Avatar>
                        <a class="ml-2">
                            <p class="text-md font-bold">Username</p>
                            <p class="text-xs font-600 text-lightblue-500">@User</p>
                        </a>
                        
                    </div>
                    <div class="justify-self-end">
                            <Button>关注</Button>
                        </div>
                </div>
            </div>
            <div class="flex flex-grow mt-8">
                <div class="flex-grow rounded-t-3xl shadow-xl border"></div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped></style>
