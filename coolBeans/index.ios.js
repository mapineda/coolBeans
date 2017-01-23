/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'

class coolBeans extends Component {
  render() {
    return (
      <AppNavigator
        initialRoute={{ident: 'Search'}} />
    )
  }
}


AppRegistry.registerComponent('coolBeans', () => coolBeans);
