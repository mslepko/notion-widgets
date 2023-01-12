import React, { useState, useEffect } from 'react'
import Toggle from './Toggle'

export const DateTime = () => {

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className="flex flex-col md:flex-row w-3/4 justify-around">
      <div className='w-1/2'>
        <h3 className='mb-4 text-dark'>Date/time settings</h3>
        <Toggle id="am/pm" onToggle="24h" offToggle="am/pm" desc="am/pm - 24h"/>
        <Toggle id="time" onToggle="Show" offToggle="Hide" desc="Display time"/>
        <Toggle id="date" onToggle="Show" offToggle="Hide" desc="Display date"/>
        <Toggle id="quarter" onToggle="Show" offToggle="Hide" desc="Display quarter"/>
      </div>
      <div>
        <h3 className='mb-4 text-dark'>Preview</h3>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>Date: {date.toLocaleDateString()}</p>
        <p>Quarter: {Math.ceil((date.getMonth() + 1) / 3)}</p>
      </div>
    </div>
  )
}

export default DateTime