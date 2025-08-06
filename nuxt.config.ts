// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  ui: {
    fonts: false,
  },
});
