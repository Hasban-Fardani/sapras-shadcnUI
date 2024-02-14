// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt', 
    'shadcn-nuxt',
    'nuxt-aos',
    'nuxt-delay-hydration',
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  pwa: {
    manifest: {
      name: 'Aplikasi Manajemen Sarpras',
      short_name: 'Sarpras',
      theme_color: '#000',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
  },
  colorMode: {
    classSuffix: ''
  },
  delayHydration: {
    mode: 'mounts'
  }
})
