import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';


// Buttons
var swipeoutBtns = [
    {
        text: 'Button'
    }
]

export default class SwipeOut extends Component {
    render() {
        return (
            // Swipeout component
            <Swipeout right={swipeoutBtns}>
                <View>
                    <Text>Swipe me left</Text>
                </View>
            </Swipeout>
        )
    }
}