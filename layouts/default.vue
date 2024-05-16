<script setup lang="ts">
import "@/static/style.css"
import 'animate.css';
useHead({
  bodyAttrs: {
    class: 'bg-slate-800'
  },
  title: "Luke Boland | Software Engineer",
  link: [{rel: 'icon', href: "/favicon.ico?v=2"}]
})
</script>

<template>
  <slot />
</template>
