// @flow
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import darkTheme from '../themes/dark';
import AppMenu from '../components/Menu';

const containerStyle = {
  position: 'relative',
  left: '256px',
  width: '100%',
  height: '100%',
  overflow: 'auto'
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={darkTheme}>
        <div>
          <AppBar title="Electron Manga" />
          <AppMenu />
          <div style={containerStyle}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
