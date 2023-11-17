import { FastifyInstance } from 'fastify'

export default async function (app: FastifyInstance): Promise<void> {
  app.get(
    '/',
    async () => {
      return [
          {
              id: 1,
              date: "2023-11-16",
              description: "First Order"
          },
          {
              id: 2,
              date: "2023-11-17",
              description: "Second Order"
          }
      ]
    },
  )
}
