export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '高級リラクゼーション - 舞',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '京都烏丸御池で高級リラクゼーションサロンです',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '京都,烏丸御池,高級リラクゼーションサロン,マッサージ',
      },
      { name: 'format-detection', content: 'telephone=09066771888' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-gtag',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //SEO
  sitemap: {
    hostname: 'https://mai-web.netlify.app/',
    gzip: true,
  },
  robots: {
    UserAgent: '*',
    Allow: '*',
  },
  'google-gtag': {
    id: 'G-FHPP2LEQXN',
  },
}
