import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import ListHeader from '../../components/ListHeader';
export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            valid: false,
        };
        this.changePassword = this.changePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    handleLogin() {
        this.props.navigation.navigate('ListRT');
    }

    changePassword() {
        let myRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (myRegex.test(this.state.password)) this.state.valid = true;
    }

    render() {
        return (
            <View>
                {/* <View style={styles.headStyle}>
                    <Text style={styles.headText}>Welcome</Text>
                </View>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => {
                        this.setState({ password: text })
                        this.changePassword();
                    }}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.state.valid ? this.handleLogin : null}>
                    <Text style={styles.headText}>Login</Text>
                </TouchableOpacity> */}
                <ListHeader />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    headText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 22
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#007dff',
        flex: 1,
        alignSelf: 'stretch'
    },
    button: {
        backgroundColor: '#007dff',
        width: "80%",
        marginTop: "9%",
        padding: "2%"
    },
    inputs: {
        flex: 1,
        width: '80%'
    }
});