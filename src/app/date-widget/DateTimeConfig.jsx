import React from 'react'
import Toggle from '../components/Toggle'

const dateWidgetContent = {
  'ampm': {
    desc: 'am/pm - 24h',
    on: '24h',
    off: 'am/pm',
  },
  'time': {
    desc: 'Time',
  },
  'date': {
    desc: 'Date',
  },'day':{
    desc: 'Day',
  },
  'quarter': {
    desc: 'Quarter',
  },
}

const contentKeys = Object.keys(dateWidgetContent)

export const DateTime = (props) => {
  let config = props['config'];
  let toggles = []

  Object.keys(config).forEach((id) => {
    if (!contentKeys.includes(id)) {
      return
    }
    
    const status = config[id]
    const values = dateWidgetContent[id]
    toggles.push(
      <Toggle
        key={id}
        name={id}
        desc={values['desc']}
        onToggle={values['on']}
        offToggle={values['off']}
        status={status}
        setConfig={props.setConfig}
      />)
  })

  return (
    <>{toggles}</>
  )
}

export default DateTime