<script lang="ts" setup>
</script>

<template>
  <div class="h-screen w-1/2 flex flex-col justify-center items-center text-slate-100 mx-auto">
    <div class="p-5 rounded border-slate-700">
      <h1 class="text-5xl font-mono pb-1">Hi, I'm Luke</h1>
      <div>
        <div>I'm a software engineer in Brisbane, Australia.</div>
        <div class="border-b border-dotted my-5"/>
        <div class="flex">
          <div class="text-sm mt-4">A dynamic and results-oriented Senior Software Engineer with a proven track record of driving
            innovation and delivering high-quality solutions in fast-paced environments. I excel in leveraging cutting-edge
            technologies to streamline processes and enhance overall efficiency.<br/><br/>

            Currently, as a Senior Software Engineer at Flight Centre Travel Group, I work on the development of robust
            software solutions, utilizing expertise in Java, Spring and Vue.js to build robust, scalable enterprise software
            to meet the ever-changing needs of the travel industry.<br/><br/>

            I am passionate about software engineering as a craft and take pride in the work that I do. As a self-taught
            software engineer, I am a zealous reader and learner - always on the lookout for ways to upgrade my skills.
          </div>
          <img src="@/public/profile_pic.jpg"  alt="Profile Picture" class="max-h-56 ml-2 rounded-2xl"/>
        </div>
        <div class="border-b border-dotted my-5"/>
        <div class="grid grid-cols-2">
          <h1 class="font-mono pb-2 text-lg col-span-2">Skills</h1>
          <span class="mb-2">Languages</span>
          <span class="mb-2">Frameworks</span>
          <div class="flex">
            <font-awesome :icon="['fab', 'js']" class="fa-2xl mx-1" title="Javascript" />
            <img src="@/public/typescript-icon.svg" class="max-h-8 saturate-0 brightness-150 mx-1" alt="Typescript" title="Typescript"/>
            <font-awesome :icon="['fab', 'html5']" class="fa-2xl mx-1" title="HTML" />
            <font-awesome :icon="['fab', 'css3-alt']" class="fa-2xl mx-1" title="CSS" />
            <font-awesome :icon="['fab', 'python']" class="fa-2xl mx-1" title="Python" />
            <font-awesome :icon="['fab', 'java']" class="fa-2xl mx-1" title="Java" />
            <img src="@/public/powershell-icon.svg" class="max-h-8 saturate-0 brightness-150" alt="Powershell Logo" title="Powershell"/>
            <img src="@/public/sql-icon.svg" class="max-h-8 saturate-0 brightness-150" alt="SQL Logo" title="SQL"/>
          </div>
          <div class="flex">
            <font-awesome :icon="['fab', 'vuejs']" class="fa-2xl mx-1" title="Vue.js" />
            <font-awesome :icon="['fab', 'react']" class="fa-2xl mx-1" title="React" />
            <img src="../public/spring-icon.svg" class="max-h-8 saturate-0 brightness-150" alt="Spring Logo" title="Spring"/>
            <img src="../public/nuxt-icon.svg" class="max-h-9 saturate-0 brightness-150" alt="Nuxt Logo" title="Nuxt"/>
          </div>
        </div>
        <div class="border-b border-dotted my-5"/>
        <div class="flex">
          <a href="https://www.linkedin.com/in/luke-boland-36110a5b/" class="mr-3 transition hover:text-slate-500">LinkedIn</a>
          <a href="https://github.com/furnapso/" class="mx-3 transition hover:text-slate-500">Github</a>
          <a href="https://github.com/furnapso/" class="mx-3 transition hover:text-slate-500">hello@lukeboland.au</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
