import { defineNuxtConfig } from '@nuxt/bridge'
import webpack from 'webpack'

export default defineNuxtConfig({
  // nitro: {
  //   port: 5000, // par défaut : 3000

  // },
  // port: 5000,
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  },
  ssr: false,
  target: 'static',
  bridge: {
    nitro: false,
    meta: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MADMIN',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@100;400;700;900&display=swap",
      },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/font.css',
    '~assets/css/table.css',
    '~assets/css/transition.css',
    'animate.css/animate.compat.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  // pageTransition: 'fade',
  // transition: {
  //   afterLeave(el) {
  //     console.log('afterLeave', el)
  //   }
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false },
    '~plugins/scrollbar.js',
    '~plugins/jsontocsv.js',
    '~plugins/croppa.js',
    '~plugins/formatnumber.js',
    { src: '~/plugins/veevalidate.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-material-design-icons-iconfont',

    // 'nuxt-material-design-icons',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
    'vue-social-sharing/nuxt',
  ],

  dayjs: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    defaultTimeZone: 'Pacific/Tahiti',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
  router: {
    middleware: 'auth'
  },
  auth: {

    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {

        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'auth/loginadmin', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: 'auth/user', method: 'get' }
        }
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: '460503435426912',
        scope: ['public_profile', 'email']
      },
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    mode: 'no-cors',
    proxyHeaders: false,
    credentials: false,
    baseURL: process.env.API_URL,
    // headers: {
    //   common: {
    //     'Access-Control-Allow-Origin': '*'
    //   },
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ],
    transpile: ['vee-validate']
  }
})
