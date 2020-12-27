require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

export default {
  target: 'static',

  head: {
    title: 'test-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: ['~/plugins/prism'],

  components: true,

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
   },

  env: {
    API_KEY
  },
}
