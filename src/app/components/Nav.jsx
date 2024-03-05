"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Nav = () => {
  const searchParams = useSearchParams()
  const hideNav = searchParams.has('hidenav') && searchParams.get('hidenav')  == 1
  return (
    <>
      {!hideNav && <nav className="flex justify-around sm:flex-col relative p-2 w-full sm:min-h-screen sm:w-48
      items-center sm:justify-center shrink-0
      text-dark dark:text-light bg-light dark:bg-brand">
        <Link href="/">Home</Link>
        <Link href="/date-widget">Date Widget</Link>
        <Link href="/pomodoro">Pomodoro Timer</Link>
        <div className="mt-auto"> {/* This makes the content below it go to the bottom */}
            <a href="https://www.buymeacoffee.com/michal.codes" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-coffee" style={{ fontSize: '24px' }}></i> Buy me a Coffee?
            </a>
          </div>
      </nav>}
    </>
  )
}

export default Nav
