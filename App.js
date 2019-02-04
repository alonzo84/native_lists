import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Home } from './app/views/Home.js';
import { Login } from './app/views/Login.js';

import Bananas from './components/Bananas';
// import PizzaTranslators from './components/PizzaTranslator';
// import ButtonBasics from './components/ButtonBasics';
// import SwipeOut from './components/SwipeOut';

// import { Login } from './app/views/Login.js';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Login
  },
  LoginRT: {
    screen: Login
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);
export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
