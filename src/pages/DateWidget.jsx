import React from 'react'

import DateTimeWidget from '../components/DateTimeWidget'
import DateTimeConfig from '../components/DateTimeConfig'

function DateWidgetPage() {
  let dateWidgetConfig = {
    'ampm': {
      desc: 'am/pm - 24h',
      on: '24h',
      off: 'am/pm',
      status: true
    },
    'time': {
      desc: 'Display time',
      status: true
    },
    'date': {
      desc: 'Display date',
      status: true
    },
    'quarter': {
      desc: 'Display quarter',
      status: true
    },
  }

  return (
    <div className="flex flex-col md:flex-row w-3/4 justify-around">
      <div className='w-1/2'>
        <h3 className='mb-4 text-dark'>Date/time settings</h3>
        <DateTimeConfig dateWidgetConfig={dateWidgetConfig}/>
      </div>
      <div className="flex flex-col items-center w-3/4 justify-around">
        <h3 className='mb-4 text-dark'>Preview</h3>
        <DateTimeWidget dateWidgetConfig={dateWidgetConfig}/>
      </div>
    </div>
  )
}

export default DateWidgetPage