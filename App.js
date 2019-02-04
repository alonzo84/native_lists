import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bananas from './components/Bananas';
import PizzaTranslators from './components/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics';
import SwipeOut from './components/SwipeOut';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js tOOOOo start working on your app!</Text>
        <Bananas/>
        <PizzaTranslators/>
        <ButtonBasics/>
        <SwipeOut/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
