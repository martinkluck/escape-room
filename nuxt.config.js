export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Escape room',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    // preference: 'dark',
    // fallback: 'light',
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: process.env.VUE_APP_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECT_ID,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_ID,
      measurementId: process.env.VUE_APP_MEASUREMENT_ID,
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    },
  },

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_API_KEY,
    VUE_APP_AUTH_DOMAIN: process.env.VUE_APP_AUTH_DOMAIN,
    VUE_APP_DATABASE_URL: process.env.VUE_APP_DATABASE_URL,
    VUE_APP_PROJECT_ID: process.env.VUE_APP_PROJECT_ID,
    VUE_APP_STORAGE_BUCKET: process.env.VUE_APP_STORAGE_BUCKET,
    VUE_APP_MESSAGING_SENDER_ID: process.env.VUE_APP_MESSAGING_SENDER_ID,
    VUE_APP_ID: process.env.VUE_APP_ID,
    VUE_APP_MEASUREMENT_ID: process.env.VUE_APP_MEASUREMENT_ID,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/svg', '@nuxtjs/firebase'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
