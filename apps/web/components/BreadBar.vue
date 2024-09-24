<script setup="props" lang="ts">
import { type breadColor } from '@/store/bread'
import uno from '../uno.config.js';


interface BreadDisplay {
    icon?: string;
    title?: string;
    content?: string;
    color?: string | breadColor;
    duration?: number;
}

const props = withDefaults(defineProps<BreadDisplay>(), {
    icon: 'fluent:info-12-filled',
    title: 'I\'m a BREAD!',
    content: 'No content here, huh? You idiot!',
    color: 'red',
    duration: 2000
});

const breadClass = computed(() => {
    let coloredClass: Array<string> = [];
    if (typeof props.color === 'string')
        coloredClass = [`bg-${props.color}-100`, `border-${props.color}-300`, `text-${props.color}-800`, `[&>span]:text-${props.color}-800`]
    else
        coloredClass = [props.color.background, props.color.text, props.color.border, '[&>span]:text' + props.color.text]
    return [...coloredClass];
})

</script>

<template>
    <Transition name="fade">
        <div class="bread-bar flex rounded-lg p-4 m-auto border-2 mb-4" :class="breadClass">
            <Icon :name="icon" class="min-w-4 w-4 h-4"></Icon>
            <div class="pl-2 min-w-64">
                <h5 class="mb-1 font-medium leading-none tracking-tight">{{ title }}</h5>
                <div class="text-sm [&_p]:leading-relaxed">
                    {{ content }}
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .3s;
}

.slide-enter,
.slide-leave-active {
    transform: translateX(-100%);
}
</style>
