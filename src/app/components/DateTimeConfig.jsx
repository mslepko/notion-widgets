import React from 'react'
import Toggle from './Toggle'

export const DateTime = (widgetContent) => {
  let config = [];
  let toggles = []
  const widgetData = widgetContent['dateWidgetContent']

  Object.keys(config).forEach((id) => {
    const status = config[id]
    const values = widgetData[id]
    toggles.push(
      <Toggle
        key={id}
        name={id}
        desc={values['desc']}
        onToggle={values['on']}
        offToggle={values['off']}
        status={status}
      />)
  })

  return (
    <>{toggles}</>
  )
}

export default DateTime