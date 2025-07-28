"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" scroll={false} className="text-2xl font-bold text-foreground">
            Peediyo<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              scroll={false}
              className="text-muted-foreground hover:text-foreground transition-colors hover:underline "
            >
              Services
            </Link>
            {/* <Link href="/portfolio" scroll={false} className="text-muted-foreground hover:text-foreground transition-colors hover:underline hover:text-primary">
              Our Work
            </Link> */}

            <Link
              href="/about"
              scroll={false}
              className="text-muted-foreground hover:text-foreground transition-colors hover:underline "
            >
              About
            </Link>
            {/* <Link href="/blog" scroll={false} className="text-muted-foreground hover:text-foreground transition-colors hover:underline hover:text-primary">
              Blog
            </Link> */}
            <Link
              href="/pricing"
              scroll={false}
              className="text-muted-foreground hover:text-foreground transition-colors hover:underline "
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              scroll={false}
              className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://calendly.com/teampeediyo/30min"
  target="_blank"
  rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors hidden md:block"
            >
              Book a Call
            </a>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-foreground p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/services"
                scroll={false}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              {/* <Link
                href="/portfolio"
                scroll={false}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMobileMenu}
              >
                Our Work
              </Link> */}
              <Link
                href="/about"
                scroll={false}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              {/* <Link
                href="/blog"
                scroll={false}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMobileMenu}
              >
                Blog
              </Link> */}
              <Link
                href="/pricing"
                scroll={false}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMobileMenu}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                scroll={false}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors text-left"
                onClick={toggleMobileMenu}
              >
                Book a Call
              </Link>
              <div className="flex justify-start pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
