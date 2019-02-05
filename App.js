import React from 'react';
import { StackNavigator } from 'react-navigation';

import  List  from './app/views/List.js';
import { Login } from './app/views/Login.js';

import Bananas from './components/Bananas';
// import SwipeOut from './components/SwipeOut';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Login
  },
  ListRT: {
    screen: List
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
