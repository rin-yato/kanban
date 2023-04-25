// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  runtimeConfig: {
    storyblok: {
      accessToken: process.env.STORYBLOK_TOKEN,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
});
