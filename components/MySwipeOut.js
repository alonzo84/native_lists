import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import DelButton from './DeleteBtn';

export default class MySwipeOut extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {
            id,
            description,
            delHandler,
            buttonStyles
        } = this.props
        return (
            // Swipeout component
            <Swipeout
                right={[{
                    component: <DelButton style={styles.buttonStyles} delHandler={() => delHandler(id)} />,
                    backgroundColor: 'red',
                    flex: 1
                }]}
                style={styles.swipeOut}
            >
                <View style={styles.listTxt}>
                    {/* <Image
                        style={styles.logoStyle}
                        source={require("../assets/icon.png")}
                    /> */}
                    <Text style={styles.textStyle2}>{description}</Text>
                </View>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    textStyle2: {
        textAlign: 'center',
        fontSize: 20
    },
    listTxt: {
        paddingBottom: 20,
        paddingTop: 20
    },
    swipeOut: {
    },
    buttonStyles: {
        paddingTop: 20
    }
});