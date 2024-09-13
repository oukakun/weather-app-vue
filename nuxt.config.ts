import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:false,

  nitro: {
    preset: 'node-server'
  },

  runtimeConfig: {
    public: {
      apiKey: 'bcc97c2c841fb3676139a2528d576f0e'
    }
  },

  devServer: {
    port:4000
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix',
  }
})