import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';

const DelButton = (delHandler, id) => {
    return (
        <TouchableOpacity
            style={styles.delButton}
            onPress={() => delHandler(id)}>
            <Text style={styles.delText}>Delete</Text>
        </TouchableOpacity>
    );
}
export default class SwipeOut extends Component {
    render() {
        const {
            key,
            id,
            description,
            delHandler
        } = this.props
        return (
            // Swipeout component
            <Swipeout 
                right={() => DelButton(delHandler, id)}
                key={key}
                >
                <View>
                    {/* <Image
                        style={styles.logoStyle}
                        source={require("../assets/icon.png")}
                    /> */}
                    <Text>{description}</Text>
                </View>
            </Swipeout>
        )
    }
}