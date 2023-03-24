"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Nav = () => {
  const searchParams = useSearchParams()
  const hideNav = searchParams.has('hidenav') && searchParams.get('hidenav')  == 1
  return (
    <>
      {!hideNav && <nav className="flex flex-col relative min-h-screen min-w-[20vw]
      items-center justify-center shrink-0
      text-dark dark:text-light bg-light dark:bg-brand">
        <Link href="/">Home</Link>
        <Link href="/date-widget">Date Widget</Link>
      </nav>}
    </>
  )
}

export default Nav
