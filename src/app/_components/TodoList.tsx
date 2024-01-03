'use client'

import { trpc } from '~/app/_trpc/client'
import { caller } from '~/app/_trpc/server-client'

export default function TodoList({
  initialTodos,
}: {
  initialTodos?: Awaited<ReturnType<(typeof caller)['getTodos']>>
}) {
  const getTodos = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
  })

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  )
}
