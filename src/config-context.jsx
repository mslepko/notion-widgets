import React from 'react';
import ConfigContext from './config'

let dateWidgetConfig = {
  'ampm': true,
  'time': true,
  'date': true,
  'quarter': true,
}

function configChange(state, name) {
  console.log(name, 'configChange', state)
  console.log('1', state[name])
  state[name] = !state[name]
  console.log('2', state[name])
  return state
}
function ConfigProvider({children}) {
  const [state, dispatch] = React.useReducer(configChange, dateWidgetConfig)
  const value = {state, dispatch}
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
}

export default ConfigProvider