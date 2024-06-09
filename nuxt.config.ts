// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "dayjs-nuxt",
    "@nuxtjs/supabase",
    "shadcn-nuxt"
  ],

  dayjs: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
    plugins: ["localizedFormat"]
  },

  supabase: {
    key: process.env.SUPABASE_KEY,
    url: process.env.SUPABASE_URL,
    redirect: false,
  }
});