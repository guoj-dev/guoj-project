<template>
    <div class="global-bread-container flex items-center justify-center flex-shrink">
        <div class="alert-container flex flex-col relative items-center">
            <TransitionGroup name="breads">
                <BreadBar v-for="bread in breadList" :key="bread.id" :icon="bread.icon" :title="bread.title"
                    :content="bread.content" :color="bread.color" :duration="bread.duration"></BreadBar>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBreadStore } from '../store/bread';
import { onMounted } from 'vue';

const store = useBreadStore();

const breadList = computed(() => store.list);

</script>

<style scoped>
.global-bread-container {
    @apply absolute;
    top: 36px;
    left: 0;
    right: 0;
    z-index: 100;
}
.breads-move,
.breads-enter-active,
.breads-leave-active {
  transition: all .5s ease;
}
.breads-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
.breads-leave-active {
  transform: translateY(-10px);
  opacity: 0;
  position: absolute;
}
</style>
