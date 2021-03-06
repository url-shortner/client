module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  srcDir: 'src/',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/pwa.js', ssr: false},
    {src: '~plugins/axios.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
  ],
  pwa: {
    manifest: {
      name: 'nuxt_pwa',
      short_name: 'NuxtPwa',
      start_url: '/',
      display: 'standalone',
      background_color: '#000'
    },

    workbox: {
      offline: true,
      dev: true,
      importScripts: ['pwa.js'],
      runtimeCaching: [
        {
          urlPattern: "/*",
          handler: "networkFirst",
          method: "GET"
        }
      ]
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
