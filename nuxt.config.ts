// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@formkit/auto-animate/nuxt"],
  googleFonts: {
    families: {
      FiraCode: true,
      "Radio Canada": true
    }
  }
})