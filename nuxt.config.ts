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

  modules: ['@nuxt/ui']
})