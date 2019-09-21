import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NoTasks extends Component {

    styles = StyleSheet.create({
        middleScreen: {
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
        }
    });

    render() {
        return (
            <View style={this.styles.middleScreen}>
                <Text> NO hay tareas para mostrar </Text>
            </View>
        );
    }
}
