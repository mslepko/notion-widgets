import React from 'react'
import Toggle from './Toggle'
import useConfig from "../config-provider"

export const DateTime = (widgetContent) => {
  const {dispatch, state} = useConfig()
  let config = state
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