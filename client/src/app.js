import { createSSRApp } from 'vue'
import { createRouter } from '@/router.js'

import App from '@/App.vue'

export function createApp() {
  
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)

  return { 
    app,
    router,
  }
}