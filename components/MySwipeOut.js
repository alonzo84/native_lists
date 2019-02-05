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
            delHandler
        } = this.props
        return (
            // Swipeout component
            <Swipeout
                right={[{
                    component: <DelButton delHandler={() => delHandler(id)} />,
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
});