import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-4 md:px-6">
        <Link to="/" className="text-white font-semibold tracking-wide">
          AHA
        </Link>
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <Link to="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link to="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link to="/projects" className="transition-colors hover:text-white">
              Projects
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <Button asChild className="rounded-full bg-blue-600 px-4 text-white hover:bg-blue-500">
            <a href="tel:+18018287182">Call: (801) 828-7182</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
