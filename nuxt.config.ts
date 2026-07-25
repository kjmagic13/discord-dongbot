import tailwindcss from "@tailwindcss/vite";
import { z } from "zod/v4";

const configSchema = z.object({
  public: z.object({
    posthog: z.object({
      publicKey: z.string(),
      host: z.string(),
    }),
  }),
  discord: z.object({
    publicKey: z.string(),
    clientToken: z.string(),
    botToken: z.string(),
  }),
  openAi: z.object({
    apiKey: z.string(),
    apiBaseUrl: z.string(),
    model: z.string(),
  }),
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: configSchema.parse({
    public: {
      posthog: {
        publicKey: process.env.POSTHOG_PUBLIC_KEY,
        host: "https://app.posthog.com",
      },
    },

    discord: {
      clientToken: process.env.DISCORD_CLIENT_TOKEN,
      publicKey: process.env.DISCORD_PUBLIC_KEY,
      botToken: process.env.DISCORD_BOT_TOKEN,
    },

    openAi: {
      apiKey: process.env.OPENAI_API_KEY,
      apiBaseUrl: process.env.OPENAI_API_BASEURL,
      model: process.env.OPENAI_MODEL,
    },
  }),

  routeRules: {
    "/ingest/**": { proxy: "https://app.posthog.com/**" },
  },

  future: {
    compatibilityVersion: 4,
  },
});
