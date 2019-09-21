import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
    }

    styles = StyleSheet.create({
        itemRow: {
            padding: 15,
            borderTopWidth: 1,
            borderColor: "lightgrey"
        }
    });

    render() {
        const { task } = this.props;

        return (
            <View style={this.styles.itemRow}>
                <Text> 
                    {task.titulo} - {task.completado ? "DONE" : "TODO"} 
                </Text>
            </View>
        );
    }
}
