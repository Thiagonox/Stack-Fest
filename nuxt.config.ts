// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routes: [
    {
      name: 'cadastro',
      path: '/cadastro',
      components: '~/pages/cadastro.vue'
    },
    {
      name: 'login',
      path: '/login',
      component: '~/pages/login.vue'
    },
    {
      name: 'index',
      path: '/',
      component: '~/pages/index.vue'
    },
    {
      name: 'eventos',
      path: '/eventos',
      component: '~/pages/eventos.vue'
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: '~/pages/404.vue'
    }
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})