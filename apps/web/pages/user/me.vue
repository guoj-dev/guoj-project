<template>
    <div class="container mt-8 flex flex-col h-full">
        <div class="user-card rounded-xl border shadow-md w-15rem">
            <div class="user-card-top min-h-4rem bg-gray-200 rounded-t-xl"></div>
            <div class="relative user-card-lower min-h-3rem drop-shadow">
                <div class="user-card-avatar-outer absolute left-1rem top--5">
                    <Avatar size="sm" class="shadow-md"></Avatar>
                </div>
                <div class="absolute left-4rem top--6">
                    <p class="text-white/90 text-shadow-md">Quank</p>
                </div>
                <div class="absolute flex right-.5rem top--6 h-5">
                    <Button class="border border-gray/30 bg-gray/20 hover:bg-gray/80 h-5 text-xs px-1"><Icon name="fluent:people-star-16-regular" class="mr-1"></Icon>Subscribe</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>
