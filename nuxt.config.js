const pkg = require('./package')
const axios = require('axios')
// remove when deploying production version
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Rivera Web Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rocket.svg' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/highlightjs.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/disqus'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    ['storyblok-nuxt', {accessToken: process.env.NODE_ENV == 'production' ? process.env.ACCESS_TOKEN_PROD : process.env.ACCESS_TOKEN_DEV, cacheProvider: 'memory'}]
  ],
  purgeCSS: {
    mode: 'postcss'
  },
  generate: {
    subFolders: false,
    routes: function () {
      return axios.get('https://api.storyblok.com/v1/cdn/stories?&version=published&token=' + process.env.ACCESS_TOKEN_PROD + '&starts_with=blog&cv=' + Math.floor(Date.now() / 1e3))
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug);
        return [
          '/',
          '/blog',
          'projects',
          'contact',
          ...blogPosts
        ]
      })
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
