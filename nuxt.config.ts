// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 4002
  },
  css: ['bulma/css/bulma.css'],
  modules: [
    '@nathanchase/nuxt-dayjs-module'
  ],
  dayjs: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
    plugins: [
      'customParseFormat',
      'utc',
      'timezone',
      'relativeTime',
      'localizedFormat',
      'localeData',
      'isToday',
      'updateLocale'
    ]
  }
})
