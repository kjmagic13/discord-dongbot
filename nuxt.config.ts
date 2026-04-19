import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_EPsG8N8S8FMBUfTgeNsqUlYW9leCxH12cZQ14JLPtrc",
      posthogHost: "https://app.posthog.com",
    },
  },

  routeRules: {
    "/ingest/**": { proxy: "https://app.posthog.com/**" },
  },

  future: {
    compatibilityVersion: 4,
  },
});