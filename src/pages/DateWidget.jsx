import React from 'react'

import DateTimeWidget from '../components/DateTimeWidget'
import DateTimeConfig from '../components/DateTimeConfig'

const dateWidgetContent = {
  'ampm': {
    desc: 'am/pm - 24h',
    on: '24h',
    off: 'am/pm',
  },
  'time': {
    desc: 'Time',
  },
  'date': {
    desc: 'Date',
  },
  'quarter': {
    desc: 'Quarter',
  },
}

function DateWidgetPage() {
  return (
    <div className="flex flex-col md:flex-row w-3/4 justify-around">
      <div className='w-1/2'>
        <h3 className='mb-4 text-dark'>Date/time settings</h3>
        <DateTimeConfig dateWidgetConfig={dateWidgetContent}/>
      </div>
      <div className="flex flex-col items-center w-3/4 justify-around">
        <h3 className='mb-4 text-dark'>Preview</h3>
        <DateTimeWidget dateWidgetConfig={dateWidgetContent}/>
      </div>
    </div>
  )
}

export default DateWidgetPage