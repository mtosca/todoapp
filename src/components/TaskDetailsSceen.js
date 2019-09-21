import React, { Component } from 'react'
import { Text, View } from 'react-native'


export default class TaskDetailsSceen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { navigation } = this.props;
        let title = navigation.getParam('title');
        let status = navigation.getParam('status');

        return (
            <View>
                <Text> {JSON.stringify(title)} </Text>
            </View>
        )
    }
}
