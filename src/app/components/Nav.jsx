import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex flex-col relative min-h-screen min-w-[20vw]
    items-center justify-center shrink-0
    text-dark dark:text-light bg-light dark:bg-brand">
      <Link href="/">Home</Link>
      <Link href="/datewidget">Date Widget</Link>
    </nav>
  )
}

export default Nav
