import React from 'react'
import { Link } from './Link'

const Nav = () => {
  return (
    <nav className="flex flex-col relative h-screen min-w-[20vw] items-center justify-center shrink-0">
      <Link href="/">
        Home
      </Link>
      <Link href="/date-widget">
        Date Widget
      </Link>
    </nav>
  )
}

export { Nav }