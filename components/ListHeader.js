import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default ListHeader = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.backBtn} onPress={props.handleBackClick}><Text onPress={props.handleBack} style={styles.textStyle1} >{`  <`}</Text></View>
                <View style={styles.headerTxt}><Text style={styles.textStyle2} >List View</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#007dff',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: "20%"
    },
    backBtn: {
        flex: 2,
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 22,
        backgroundColor: '#007dff',
    },
    headerTxt: {
        flex: 4,
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 22,
        backgroundColor: '#007dff',
    },
    textStyle1: {
        textAlign: 'left',
        fontSize: 30,
        color: "#ffffff"
    },
    textStyle2: {
        textAlign: 'center',
        fontSize: 30,
        color: "#ffffff"
    }
});