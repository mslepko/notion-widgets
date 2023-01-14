import React from 'react';

const dateWidgetConfig = {
  'ampm': {
    desc: 'am/pm - 24h',
    on: '24h',
    off: 'am/pm',
    status: true
  },
  'time': {
    desc: 'Time',
    status: true
  },
  'date': {
    desc: 'Date',
    status: true
  },
  'quarter': {
    desc: 'Quarter',
    status: true
  },
}

export const ThemeContext = React.createContext(dateWidgetConfig);

export default class Provider extends React.Component {
  state = dateWidgetConfig;

  dateConfigChanged = searchTerm => {
    this.setState({searchTerm});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          searchTermChanged: this.searchTermChanged,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}