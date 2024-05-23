import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/fontawesome.ts'
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
})
