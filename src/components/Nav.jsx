import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex flex-col relative min-h-screen min-w-[20vw]
    items-center justify-center shrink-0
    text-dark dark:text-light bg-light dark:bg-brand">
      <Link to="/">
        Home
      </Link>
      <Link to="/date-widget">
        Date Widget
      </Link>
    </nav>
  )
}

export default Nav
