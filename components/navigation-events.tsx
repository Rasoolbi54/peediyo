"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function NavigationEvents() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0)
  }, [pathname])

  return null // This component doesn't render anything visible
}
