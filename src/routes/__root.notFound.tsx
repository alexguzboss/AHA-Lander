import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__root/notFound')({
  component: () => <h1>Not Found</h1>,
})
