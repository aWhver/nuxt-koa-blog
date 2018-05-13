const path = require('path')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '95后前端er----俊潼博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  /**
   * Global css
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['~/plugins/request.js'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        Object.assign(config.resolve.alias, {
          'api': path.resolve(__dirname, 'api')
        })
      }
    }
  },
  plugins: ['~/plugins/element'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',
      {
        target: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3001}`,
        pathRewrite: { '^/api': '/api' }
      }
    ]
  ]
}
