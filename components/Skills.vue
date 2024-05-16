<script setup lang="ts">
const icon = ref(true)
const toggleLabel = computed(() => icon.value ? "Icons" : "Text")
</script>

<template>
  <div class="w-full min-h-48">
    <div class="grid grid-cols-3 grid-rows-2 flex-grow">
      <div class="col-span-3 flex pb-2 items-center">
        <h1>Skills</h1>
        <label class="flex items-center cursor-pointer mx-5">
          <input type="checkbox" :checked="icon" @change="e => icon = e?.target?.checked ?? icon" class="sr-only peer">
          <div
              class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ toggleLabel }}</span>
        </label>
      </div>
      <span class="mb-2">Languages</span>
      <span class="mb-2">Frameworks</span>
      <span class="mb-2">Technologies</span>
      <div class="flex flex-wrap items-center" v-if="icon">
        <img src="../public/Java.svg" class="max-h-8 m-1" alt="Java" title="Java"/>
        <img src="../public/Python.svg" class="max-h-8 m-1" alt="Python" title="Python"/>
        <img src="../public/JavaScript.svg" class="max-h-8 m-1" alt="JavaScript" title="JavaScript"/>
        <img src="../public/TypeScript.svg" class="max-h-8 m-1" alt="TypeScript" title="TypeScript"/>
        <img src="../public/HTML5.svg" class="max-h-8 m-1" alt="HTML5" title="HTML5"/>
        <img src="../public/CSS3.svg" class="max-h-8 m-1" alt="CSS3" title="CSS3"/>
        <img src="../public/PowerShell.svg" class="max-h-8 m-1" alt="PowerShell" title="PowerShell"/>
        <img src="../public/Bash.svg" class="max-h-8 m-1 invert" alt="Bash" title="Bash"/>
        <img src="../public/SQL.svg" class="max-h-8 m-1 invert" alt="SQL" title="SQL">
      </div>

      <div class="flex flex-wrap items-center" v-else>
        <ul class="columns-2 list-inside text-slate-400 text-sm">
          <li>Java</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>PowerShell</li>
          <li>Bash</li>
          <li>SQL</li>
        </ul>
      </div>

      <div class="flex items-center" v-if="icon">
        <img src="../public/React.svg" class="max-h-8 m-1" alt="React" title="React"/>
        <img src="../public/Vue.js.svg" class="max-h-8 m-1" alt="Vue.js" title="Vue.js"/>
        <img src="../public/nuxtjs.svg" class="max-h-8 m-1" alt="Nuxt.js" title="Nuxt.js"/>
        <img src="../public/Spring.svg" class="max-h-8 m-1" alt="Spring" title="Spring"/>
        <img src="../public/FastAPI.svg" class="max-h-8 m-1" alt="FastAPI" title="FastAPI"/>
        <img src="../public/Selenium.svg" class="max-h-8 m-1" alt="Selenium" title="Selenium"/>
        <img src="../public/Tailwind%20CSS.svg" class="max-h-8 m-1" alt="Tailwind" title="Tailwind"/>
      </div>

      <div class="flex flex-wrap items-center" v-else>
        <ul class="columns-2 list-inside text-slate-400 text-sm">
          <li>React</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Spring / Spring Boot</li>
          <li>FastAPI</li>
          <li>Selenium</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

      <div class="flex items-center flex-wrap" v-if="icon">
        <img src="../public/Azure.svg" class="max-h-8 m-1" alt="Azure" title="Azure"/>
        <img src="../public/azure-devops.svg" class="max-h-8 m-1" alt="Azure Devops" title="Azure Devops"/>
        <img src="../public/Git.svg" class="max-h-8 m-1" alt="Git" title="Git"/>
        <img src="../public/GitHub.svg" class="max-h-8 m-1" alt="Github" title="Github"/>
        <img src="../public/Docker.svg" class="max-h-8 m-1" alt="Docker" title="Docker"/>
        <img src="../public/Vite.js.svg" class="max-h-8 m-1" alt="Vite.js" title="Vite.js"/>
        <img src="../public/Linux.svg" class="max-h-8 m-1" alt="Linux" title="Linux"/>
        <img src="../public/uipath-3.svg" class="max-h-8 m-1" alt="UiPath" title="UiPath"/>
        <img src="../public/Splunk.svg" class="max-h-12 m-1 invert" alt="Splunk" title="Splunk"/>
        <img src="../public/new-relic.svg" class="max-h-8 m-1 invert grayscale" alt="New Relic" title="New Relic"/>
        <img src="../public/digital-ocean.svg" class="max-h-8 m-1" alt="Digital Ocean" title="Digital Ocean"/>
        <img src="../public/intellij.svg" class="max-h-8 m-1" alt="Intellij" title="Intellij"/>
      </div>

      <div class="flex flex-wrap items-center" v-else>
        <ul class="columns-2 list-inside text-slate-400 text-sm">
          <li>Azure</li>
          <li>Azure Devops</li>
          <li>Git</li>
          <li>Github</li>
          <li>Docker</li>
          <li>Vite.js</li>
          <li>Linux</li>
          <li>Splunk</li>
          <li>New Relic</li>
          <li>Digital Ocean</li>
          <li>Intellij IDEA</li>
        </ul>
      </div>
    </div>
  </div>
</template>