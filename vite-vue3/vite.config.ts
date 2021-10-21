import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@routers', replacement: '/src/routers' },
      { find: '@views', replacement: '/src/views' },
    ]
  },
  plugins: [vue()],
  server:{
    port: 3000
  }
})
