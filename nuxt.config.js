const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    // base: '/2030watch'
    base: ''
  }
} : {}

module.exports = {
  modules: [
    ['nuxt-matomo', { matomoUrl: '//traffic.okfn.de/', siteId: 14 }]
  ],
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: '2030Watch | Wie nachhaltig ist Deutschland?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2030Watch diskutiert wie ambitioniert Deutschland die Nachhaltigkeitsziele der Agenda 2030 umsetzt.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chivo:400,700|Roboto+Mono:400,700', defer: true }
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    'normalize-scss',
    // CSS file in the project
    '@/assets/style/base.scss'
  ],
  generate: {
    routes: function () {
      const indicators = Object.keys(JSON.parse(require('fs').readFileSync('data/indicators.json', 'utf8'))).map((data) => {
        return '/indicator/' + data
      })
      const sdgs = Object.keys(JSON.parse(require('fs').readFileSync('data/sdgs.json', 'utf8'))).map((data) => {
        return '/sdg/' + data
      })
      return [...indicators, ...sdgs]
    },
    fallback: "404.html"
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill'],
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
