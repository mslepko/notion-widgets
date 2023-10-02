import './globals.css'
import Nav from './components/Nav'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Notion Widgets',
  description: 'Notion Widgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className='flex w-full min-h-screen'>
        <Nav />
        <main className="flex w-full min-h-screen min-w-screen flex-1 items-center justify-center text-2xl text-dark">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
