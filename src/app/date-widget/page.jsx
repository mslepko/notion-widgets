"use client";
import React from 'react'
import DateTimeWidget from './DateTimeWidget'
import DateTimeConfig from './DateTimeConfig'
import { useSearchParams } from 'next/navigation';
import { useState } from "react"

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
const configElements = ['ampm', 'time', 'date', 'quarter', 'seconds', 'minutes']

function DateWidgetPage() {
  const searchParams = useSearchParams();
  const [ampm, setAmpm] = useState(searchParams.has('ampm') ? searchParams.get('ampm') : true)
  const [time, setTime] = useState(searchParams.has('time') ? searchParams.get('time') : true)
  const [date, setDate] = useState(searchParams.has('date') ? searchParams.get('date') : true)
  const [quarter, setQuarter] = useState(searchParams.has('quarter') ? searchParams.get('quarter') : true)

  const dateWidgetConfig = {
    'ampm': ampm,
    'time': time,
    'date': date,
    'quarter': quarter,
  }

  return (
    <div className="flex flex-col md:flex-row w-3/4 justify-around">
      <div className='w-1/2'>
        <h3 className='mb-4 text-dark'>Date/time settings</h3>
        <DateTimeConfig content={dateWidgetContent} config={dateWidgetConfig}/>
      </div>
      <div className="flex flex-col items-center w-3/4 justify-around">
        <h3 className='mb-4 text-dark'>Preview</h3>
        <DateTimeWidget config={dateWidgetConfig}/>
      </div>
    </div>
  )
}

export default DateWidgetPage