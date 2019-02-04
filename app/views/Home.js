import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Hello World Home</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});