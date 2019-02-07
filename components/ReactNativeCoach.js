import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default ListHeader = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewStyleOne}>
                <Text style={styles.textStyle}> 1 </Text>
            </View>
            <View style={styles.viewStyleTwo}>
                <Text style={styles.textStyle}> 2 </Text>
            </View>
            <View style={styles.viewStyleThree}>
                <Text style={styles.textStyle}> 3 </Text>
            </View>
        </View>

    );
}

let styles = StyleSheet.create({
    container: { 
        backgroundColor: '#4286f4',
        flex: 1,
        flexDirection: 'row'
    },
    viewStyleOne: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b642f4'
    },
    viewStyleTwo: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    viewStyleThree: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    textStyle: {
        textAlign: 'center'
    }
})