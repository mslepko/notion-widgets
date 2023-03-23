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
    <div className="text-left">
      {config.time ? <p>Time: {time}</p> : null}
      {config.date ? <p>Date: {date}</p> : null}
      {config.quarter ? <p>Quarter: {quarter}</p> : null}
    </div>
  )
}

export default DateTimeWidget