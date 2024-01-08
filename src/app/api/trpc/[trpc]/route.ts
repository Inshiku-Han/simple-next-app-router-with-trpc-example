import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '~/server'
import { TRPC_ENDPOINT } from '~/constants/api'

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: TRPC_ENDPOINT,
    req,
    router: appRouter,
    createContext: () => ({}),
  })
}

export const GET = handler
export const POST = handler
