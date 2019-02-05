import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default DelButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.delHandler}
                style={styles.delButton}>
                <Text style={styles.delText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
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