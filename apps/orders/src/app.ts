import 'module-alias/register'
import fastify, {FastifyInstance, FastifyServerOptions} from 'fastify'
import autoload from '@fastify/autoload'
import {join} from 'path'

export default function createApp(
  opts?: FastifyServerOptions,
): FastifyInstance {
  const defaultOptions = {
    logger: true,
  }

  const app = fastify({ ...defaultOptions, ...opts })

  app.register(autoload, {
    dir: join(__dirname, 'routes'),
    options: { prefix: '/orders' },
  })

  return app
}
