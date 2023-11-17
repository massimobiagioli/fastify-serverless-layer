import { FastifyInstance } from 'fastify'

export default async function (app: FastifyInstance): Promise<void> {
  app.get(
    '/',
    async () => {
      return [
          {
              id: 1,
              name: "Johnny Walker"
          },
          {
              id: 2,
              name: "Jack White"
          }
      ]
    },
  )
}
