import { server } from '@hapi/hapi'
import routes from './routes.js'
import vision from '@hapi/vision'
import handlebars from 'handlebars'
import path from 'path'
import inert from '@hapi/inert'

const init = async () => {
  const app = server({
    host: 'localhost',
    port: 5000,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })
  await app.register(vision)
  await app.register(inert)
  app.route(routes)
  app.views({
    engines: {
      html: handlebars
    },
    relativeTo: path.join(path.resolve(), ''),
    path: 'views'
  })
  await app.start()
  console.log(`Server berjalan pada ${app.info.uri}`)
}

init()
