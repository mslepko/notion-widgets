"use client";
import React, { useState, useEffect } from 'react'
import { DateTime } from "luxon";
import Toggle from '../components/Toggle';

export const DateTimeWidget = (props) => {
  const [now, setDate] = useState(null);
  const config = props['config']
  const tz = config['tz'];
  const locale = config['locale'];
  const labels = config['labels'];

  useEffect(() => {
    var timer = setInterval(() => setDate(DateTime.now(tz).setLocale(locale)), 1000)
    
    return function cleanup() {
      clearInterval(timer)
    }
  })
  let daynow=new Date(Date.now())
  let dayArr=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let time = now?.toLocaleString(DateTime.TIME_WITH_SECONDS)
  let date = now?.toLocaleString(DateTime.DATE_SHORT)
  let quarter = now?.toFormat('q')
  let day=dayArr[daynow.getDay()]

  return (
    <div className="text-left whitespace-nowrap min-w-fit">
      {config.time !== '0' && <div className='flex flex-row'>
        {config.labels !== '0' && <p className='mr-2'>Time:</p>}
        <p>{time}</p>
      </div>}
      {config.date !== '0' && <div className='flex flex-row'>
        {config.labels !== '0' && <p className='mr-2'>Date:</p>}
        <p>{date}</p>
      </div>}
      {config.day !== '0' && <div className='flex flex-row'>
        {config.labels !== '0' && <p className='mr-2'>Day:</p>}
        <p>{day}</p>
      </div>}
      {config.quarter !== '0' && <div className='flex flex-row'>
        {config.labels !== '0' && <p className='mr-2'>Quarter:</p>}
        <p>{quarter}</p>
      </div>}
    </div>
  )
}

export default DateTimeWidget