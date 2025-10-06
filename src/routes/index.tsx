import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <main className="min-h-svh bg-neutral-950 pt-14 text-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Home page</h1>
        <p className="mt-2 text-white/80">Welcome to AHA.</p>
      </section>
    </main>
  ),
})
