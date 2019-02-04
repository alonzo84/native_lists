import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { blue } from 'ansi-colors';

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwrd: ''
        };
    };

    render() {
        return (
            <View style={styles.primarycontainer}>
                <View style={styles.headStyle}>
                    <Text style={styles.headText}>Welcome</Text>
                </View>
                <View style={styles.secondarycontainer}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({ passwrd: text })}
                        value={this.state.passwrd}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <TouchableHighlight underlayColor='#31e981'>
                        <Text style={styles.buttons}>
                            Login
                    </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    primarycontainer: {
        flex: 1
    },
    secondarycontainer: {
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    headText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#007dff',
        flex: 2,
        alignSelf: 'stretch'
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    labels: {
        paddingBottom: 10
    }
});