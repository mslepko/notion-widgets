"use client";
import React, { useState } from 'react'
import DateTimeWidget from './DateTimeWidget'
import DateTimeConfig from './DateTimeConfig'
import DateWidgetConfig from './DateWidgetContext'
import { useSearchParams, usePathname } from 'next/navigation'
import { DateTime } from "luxon";
import { Suspense } from 'react'

function DateWidgetPage() {
  const dateWidgetConfig = DateWidgetConfig()
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const [copied, setCopied] = useState(false)
  const hideNav = searchParams.has('hidenav') && searchParams.get('hidenav')  == 1
  const localTime = DateTime.local()
  const timeZone = searchParams.has('tz') ? searchParams.get('tz') : localTime.zoneName;
  const locale = searchParams.has('locale') ? searchParams.get('locale') : localTime.locale;
  
  let copyUrl = (typeof window !== 'undefined' ? window.location.origin : '' );
  copyUrl += pathname + '?hidenav=1'
  copyUrl += '&tz=' + timeZone;
  copyUrl += '&locale=' + locale;
  
  if (searchParams.toString().length > 0) {
    copyUrl += '&' + searchParams.toString()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyUrl);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  } 
  
  dateWidgetConfig.tz = timeZone;
  dateWidgetConfig.locale = locale;
    
  return (
    <div className="flex flex-col gap-10 w-3/4 mx-auto">
      <div className="flex flex-col md:flex-row w-full justify-around">
        {!hideNav && <div className='w-1/2'>
          <h3 className='mb-4 text-dark'>Date/time settings</h3>
          <DateTimeConfig 
            config={dateWidgetConfig}
            />
        </div>}
        <div className="flex flex-col items-start min-w-[20vw] sm:mt-0 mt-3">
        {!hideNav && <h3 className='mb-4 text-dark'>Preview</h3>}
          <DateTimeWidget config={dateWidgetConfig}/>
        </div>
      </div>
      {!hideNav && <div>
        <p>URL to copy</p>
        <Suspense>
          <div className='w-full flex flex-row'>
            <input type="text" className='w-full mr-2 border-2 border-gray-300 rounded-md p-1 text-lg' value={copyUrl} />
            <button onClick={() =>  copyToClipboard()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-lg">
              {copied ? <i className="fa fa-check"></i> : <i className="fa fa-copy"></i>}
            </button>
          </div>
        </Suspense>
      </div>}
    </div>
  )
}

export default DateWidgetPage