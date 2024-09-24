// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  compatibilityDate: "2024-09-24"
})