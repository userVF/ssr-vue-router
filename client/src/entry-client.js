import { createApp } from './app.js'

const { 
  app, 
  router,
} = createApp()

await router.isReady()

app.mount('#app')