import { createApp } from './app.js'
import { renderToString } from 'vue/server-renderer'

export async function renderAppHtml(ctx) {
  const { 
    app, 
    router,
  } = createApp()

  router.push(ctx.url)
  await router.isReady()

  const appHtml = await renderToString(app)
  
  return appHtml
}

