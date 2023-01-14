import React from 'react';
import ConfigContext from './config'

function useConfig() {
  const context = React.useContext(ConfigContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export default useConfig

