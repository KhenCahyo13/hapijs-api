import { Server } from '@hapi/hapi'
import { routes } from './routes.js'

const init = async () => {
  const server = Server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
        cors: {
            origin: ['*']
        }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan di port ${server.info.uri}`)
}

init()