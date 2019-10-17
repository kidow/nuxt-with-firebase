const TITLE = 'Vinterest'
const DESCRIPTION = 'Pinterest With Vue'

export default {
  mode: 'universal',
  srcDir: 'app/',
  head: {
    titleTemplate: '%s - ' + TITLE,
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
      }
    ]
  },

  loading: { color: '#42b883' },

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
