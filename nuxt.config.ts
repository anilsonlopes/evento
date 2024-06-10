// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "dayjs-nuxt",
    "@nuxtjs/supabase",
    "shadcn-nuxt",
    "@nuxtjs/seo",
  ],

  dayjs: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
    plugins: ["localizedFormat"],
  },

  supabase: {
    key: process.env.SUPABASE_KEY,
    url: process.env.SUPABASE_URL,
    redirect: false,
  },

  site: {
    url:
      process.env.NODE_ENV === "development"
        ? ""
        : "https://evento.quila.studio",
    name: "stüdio://evento",
    description:
      "Diretório de eventos, palestras e workshops, online e presenciais.",
    defaultLocale: "pt-BR",
  },
});
