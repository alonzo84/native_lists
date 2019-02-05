import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';
import SwipeOut from '../../components/SwipeOut';

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
        let index = this.state.examples.findIndex(x => x.id === exampleId);
        this.state.examples.splice(index, 1);
        this.setState(this.state.examples);
    }

    handleBackClick(){
        this.props.navigation.navigate('LoginRT');
    }

    render() {
        return (
            <View>
                <View><Text onPress={this.handleBackClick}>{`<`} List View</Text></View>
                {this.state.examples.map((example) =>
                    <View key={example.id}>
                        <SwipeOut
                            sectionID={this.state.examples}
                            description={example.text}
                            delHandler={this.handleDelete}
                        />
                    </View>
                )}
            </View>
        )
    }
}

export default List;