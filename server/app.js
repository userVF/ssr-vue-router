import fastify from 'fastify'

import { renderAppHtml } from '../build/server/entry-server.js'

export async function build (opts = {}) {
  const app = fastify(opts)
  app.get('/', async function (request, reply) {
    const appHtml = await renderAppHtml({
      url: request.url
    })
    return appHtml
  })
  return app
}