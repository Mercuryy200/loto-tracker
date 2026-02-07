export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "Loto Tracker - Résultats et Statistiques de Loterie",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Consultez les derniers résultats de loterie, analysez les statistiques et générez des numéros chanceux avec Loto Tracker.",
        },
        { name: "author", content: "Rima Nafougui" },
        { property: "og:title", content: "Loto Tracker - Application Nuxt.js" },
        {
          property: "og:description",
          content: "Application de suivi de loterie développée avec Nuxt.js 3",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  devtools: { enabled: true },
});
