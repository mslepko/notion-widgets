"use client";
import React, { useState, useEffect } from 'react'
import { DateTime } from "luxon";

export const DateTimeWidget = (props) => {
  const [now, setDate] = useState(null);
  const config = props['config']
  const tz = config['tz'];
  const locale = config['locale'];

  useEffect(() => {
    var timer = setInterval(() => setDate(DateTime.now(tz).setLocale(locale)), 1000)
    
    return function cleanup() {
      clearInterval(timer)
    }
  });
  
  let time = now?.toLocaleString(DateTime.TIME_WITH_SECONDS)
  let date = now?.toLocaleString(DateTime.DATE_SHORT)
  let quarter = now?.toFormat('q')

  return (
    <div className="text-left whitespace-nowrap min-w-fit">
      {(config.time !== '0') && <p>Time: {time}</p>}
      {(config.date !== '0') && <p>Date: {date}</p>}
      {(config.quarter !== '0') && <p>Quarter: {quarter}</p>}
    </div>
  )
}

export default DateTimeWidget