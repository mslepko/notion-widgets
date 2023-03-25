"use client";
import React, { useState, useEffect } from 'react'

export const DateTimeWidget = (props) => {
  const [now, setDate] = useState(null);
  const config = props['config']
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    
    return function cleanup() {
      clearInterval(timer)
    }
  });
  
  let time = now?.toLocaleTimeString()
  let date = now?.toLocaleDateString()
  let quarter = now ? Math.ceil((now.getMonth() + 1) / 3) : ''

  return (
    <div className="text-left whitespace-nowrap min-w-fit">
      {(config.time !== '0') && <p>Time: {time}</p>}
      {(config.date !== '0') && <p>Date: {date}</p>}
      {(config.quarter !== '0') && <p>Quarter: {quarter}</p>}
    </div>
  )
}

export default DateTimeWidget