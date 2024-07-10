<template>
    <div ref="typst"/>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, onMounted } from 'vue';
  import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs';
  
  const props = defineProps({
    content: String,
    fill: String,
  })
  
  
  
  </script>
  
  <style lang="css"></style>
  