import React from 'react'
import { PageContextProvider } from '../renderer/usePageContext'
import { Nav } from './Nav'
import '../assets/index.css'

export { PageLayout }

function PageLayout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className="flex w-full min-h-screen">
          <Nav />
          <div className='flex w-full min-h-screen justify-center items-center'>{children}</div>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  )
}
