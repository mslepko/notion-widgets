"use client";
import React from 'react'
import DateTimeWidget from './DateTimeWidget'
import DateTimeConfig from './DateTimeConfig'
import DateWidgetConfig from './DateWidgetContext'
import { useSearchParams, usePathname } from 'next/navigation'

function DateWidgetPage() {
  const dateWidgetConfig = DateWidgetConfig()
  const searchParams = useSearchParams()
  const pathname = usePathname();

  const hideNav = searchParams.has('hidenav') && searchParams.get('hidenav')  == 1
  
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row w-3/4 justify-around">
        {!hideNav && <div className='w-1/2'>
          <h3 className='mb-4 text-dark'>Date/time settings</h3>
          <button onClick={()=> setConfig('blue')}>Set color to blue</button>
          <DateTimeConfig 
            config={dateWidgetConfig}
            />
        </div>}
        <div className="flex flex-col items-start">
        {!hideNav && <h3 className='mb-4 text-dark'>Preview</h3>}
          <DateTimeWidget config={dateWidgetConfig}/>
        </div>
      </div>
      {!hideNav && <div>
        <p>URL to copy</p>
        <p>{window.location.href}&hidenav=1</p>
      </div>}
    </div>
  )
}

export default DateWidgetPage