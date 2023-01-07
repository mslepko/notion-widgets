import React, { useState, useEffect } from 'react'

export const DateTime = () => {

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>Date: {date.toLocaleDateString()}</p>
      <p>Quarter: {Math.ceil((date.getMonth() + 1) / 3)}</p>
    </div>
  )
}

export default DateTime