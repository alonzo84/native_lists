import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';


const DelButton = () => {
    return (
        <TouchableOpacity
            style={styles.delButton}>
            <Text style={styles.delText}>Delete</Text>
        </TouchableOpacity>
    );
}

export default class SwipeOut extends Component {
    render() {
        const {
            id,
            description,
            delHandler
        } = this.props
        return (
            // Swipeout component
            <Swipeout
                right={[{
                    component: <DelButton id={id} />,
                    onPress: delHandler
                }]}
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

const styles = StyleSheet.create({
    delText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
    },
    delButton: {
        backgroundColor: '#FF0000',
    }
});