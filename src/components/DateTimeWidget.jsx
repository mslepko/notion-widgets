import React, { useState, useEffect } from 'react'

export const DateTimeWidget = (data) => {

  var [now, setDate] = useState(new Date());
  const config = data['dateWidgetConfig']
  console.log('config', config)
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  let time = now.toLocaleTimeString()
  let date = now.toLocaleDateString()
  let quarter = Math.ceil((now.getMonth() + 1) / 3)

  return (
    <div className="text-left">
      {config.time.status ? <p>Time: {time}</p> : null}
      {config.date.status ? <p>Date: {date}</p> : null}
      {config.quarter.status ? <p>Quarter: {quarter}</p> : null}
    </div>
  )
}

export default DateTimeWidget