import React from 'react'
import Toggle from './Toggle'

export const DateTime = (data) => {
  const dateWidgetConfig = data['dateWidgetConfig']
  return (
    Object.keys(dateWidgetConfig).forEach((id) => {
      const data = dateWidgetConfig[id]
      console.log(id, 'data', data)
      return <Toggle id={id} desc={data['desc']} onToggle={data['on']} offToggle={data['off']} />
    })
  )
}

export default DateTime