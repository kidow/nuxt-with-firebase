export default {
  mode: 'universal',

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: ['@/assets/scss/main.scss'],

  plugins: [],

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],

  axios: {},
  styleResources: {
    scss: ['node_modules/open-color/open-color.scss', './assets/scss/main.scss']
  },
  vuetify: {
    customVariables: [],
    theme: {
      themes: {}
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
