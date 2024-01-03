import TodoList from './_components/TodoList'
import { caller } from './_trpc/server-client'

export default async function Home() {
  const initialTodos = await caller.getTodos()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList initialTodos={initialTodos} />
    </main>
  )
}
