import { build } from './app.js'

const port = 3000
const host = '127.0.0.1'

const app = await build()
await app.listen({ port, host })

