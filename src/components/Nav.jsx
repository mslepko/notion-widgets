import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex flex-col relative h-screen min-w-[20vw] items-center justify-center shrink-0">
      <Link to="/notion-widgets/">
        Home
      </Link>
      <Link to="/notion-widgets/date-widget">
        Date Widget
      </Link>
    </nav>
  )
}

export default Nav
