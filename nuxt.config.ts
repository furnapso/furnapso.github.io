// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],
  googleFonts: {
    families: {
      Roboto: true,
      FiraCode: true,
      "Radio Canada": true,
    }
  },
  fontawesome: {
    icons: {
      brands: ['vuejs', 'js', 'html5', 'java', 'python', 'css3-alt', 'react']
    }
  }
})