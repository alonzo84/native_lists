import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import MySwipeOut from '../../components/MySwipeOut';
import ListHeader from '../../components/ListHeader';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.examples = [
            {
                id: 1,
                text: "Example 1"
            },
            {
                id: 2,
                text: "Example 2"
            },
            {
                id: 3,
                text: "Example 3"
            },
            {
                id: 4,
                text: "Example 4"
            },
            {
                id: 5,
                text: "Example 5"
            },
            {
                id: 6,
                text: "Example 6"
            }
        ];
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleDelete(exampleId) {
        Alert.alert(`you tapped the button ${exampleId}`)
        let index = this.state.examples.findIndex(x => x.id === exampleId);
        this.state.examples.splice(index, 1);
        this.setState(this.state.examples);
    }

    handleBackClick(){
        Alert.alert(`you navigate back`);
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        return (
            <View>
                <ListHeader />
                {this.state.examples.map((example) =>
                    <View style={styles.rows} key={example.id}>
                        <MySwipeOut
                            id={example.id}
                            description={example.text}
                            delHandler={this.handleDelete}
                            style={styles.swipeout}
                            buttonStyles={styles.swipeoutBtn}
                        />
                    </View>
                )}
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    rows: {
        flex: 1,
        flexDirection: 'row',
        height: 20
    },
    swipeoutBtn: {

    },
    rows: {
        textAlign: 'center',
        borderColor: '#A9A9A9',
        borderWidth: 0.5
    }
});