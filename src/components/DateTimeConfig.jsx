import React from 'react'
import Toggle from './Toggle'

export const DateTime = (data) => {
  const dateWidgetConfig = data['dateWidgetConfig']
  let toggles = []

  Object.keys(dateWidgetConfig).forEach((id) => {
    const data = dateWidgetConfig[id]
    console.log(id, 'data', data)
    toggles.push(<Toggle key={id} desc={data['desc']} onToggle={data['on']} offToggle={data['off']} />)
  })

  return (
    <>{toggles}</>
  )
}

export default DateTime