/**
 * 将 React Native 页面注册到原生应用
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

class Root extends React.Component {
  render() {
    return <App initialAppName={this.props.initialAppName} />;
  }
}

AppRegistry.registerComponent(appName, () => Root);
