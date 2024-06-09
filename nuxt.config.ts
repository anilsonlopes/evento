// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content", "dayjs-nuxt"],

  dayjs: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
    plugins: ["localizedFormat"]
  },
});
