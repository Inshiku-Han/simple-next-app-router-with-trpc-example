'use server'

import { appRouter } from '~/server'
import { createCallerFactory } from '~/server/trpc'

const createCaller = createCallerFactory(appRouter)

export const caller = createCaller({})
