import { SiteNav } from '@/components/site-nav'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 16 }}>
      <SiteNav />
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </div>
  ),
})
