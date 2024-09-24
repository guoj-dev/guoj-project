<template>
    <div class="markdown-editor" ref="milk"></div>
</template>

<script setup lang="ts">
import { useTemplateRef } from "vue"
import { Crepe } from '@milkdown/crepe'
import "@milkdown/crepe/theme/common/style.css";

import "../styles/milkdown.css";

const milk = useTemplateRef("milk");

const props = defineProps({
  readonly: Boolean,
  defaultValue: String
})

onMounted(async () => {
    await nextTick()
    const crepe = new Crepe({
        root: milk.value,
        defaultValue: props.defaultValue || "# Hello World! \n ```cpp\n #include<iostream>\n```"
    })
    crepe.create();
    crepe.setReadonly(props.readonly);
})

</script> 

<style lang="css">
.ProseMirror {
    padding: 1rem !important;
}
milkdown-code-block {
    border-radius: 0.5rem;
}
</style>
