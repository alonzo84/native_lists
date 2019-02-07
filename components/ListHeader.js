import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default ListHeader = (props) => {
    return (
        <View style={styles.container}>
            <View><Text >{`<`}</Text></View>
            <View><Text >List View</Text></View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    backBtn: {
        flex: 2,
        fontSize: 22
    },
    headerTxt: {
        flex: 4,
        fontSize: 28
    }
});