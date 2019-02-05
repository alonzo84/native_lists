import React from 'react';
import { StackNavigator } from 'react-navigation';

import  List  from './app/views/List.js';
import { Login } from './app/views/Login.js';

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
