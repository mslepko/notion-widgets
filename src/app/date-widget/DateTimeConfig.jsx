import React from 'react'
import Toggle from '../components/Toggle'

export const DateTime = (props) => {
  let config = props['config'];
  let toggles = []
  const widgetData = props['content']

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