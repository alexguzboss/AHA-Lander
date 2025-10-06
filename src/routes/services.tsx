import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: () => (
    <main className="min-h-svh bg-neutral-950 px-4 pt-24 text-white">
      <h1 className="mx-auto max-w-6xl text-3xl font-bold">Services page</h1>
    </main>
  ),
})
