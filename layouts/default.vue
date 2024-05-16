<script setup lang="ts">
import "@/static/style.css"
import 'animate.css';
useHead({
  bodyAttrs: {
    class: 'bg-slate-800'
  }
})
</script>

<template>
  <slot />
</template>
