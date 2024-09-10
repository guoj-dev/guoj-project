<template>
    <div class="markdown-editor" ref="milk"></div>
</template>

<script setup lang="ts">
import { useTemplateRef } from "vue"
import { Crepe } from '@milkdown/crepe'
import "@milkdown/crepe/theme/common/style.css";

import "@milkdown/crepe/theme/frame.css";

const milk = useTemplateRef("milk");

const props = defineProps({
  readonly: Boolean
})

onMounted(async () => {
    await nextTick()
    console.log(milk.value)
    const crepe = new Crepe({
        root: milk.value,
        defaultValue: "# Hello World!"
    })
    crepe.create();
    crepe.setReadonly(props.readonly);
})

</script> 

<style lang="css" scoped>

</style>
