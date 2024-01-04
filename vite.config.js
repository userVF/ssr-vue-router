import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./client/src', import.meta.url))
      }
    },
  }
  return config
})

