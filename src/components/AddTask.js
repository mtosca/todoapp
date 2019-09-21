import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default class AddTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }
    }

    onTaskInput(text) {
        this.setState({task: text})
    }

    onCancel() {
        this.setState({task: ""})
    }

    onAddTask() {
        this.props.onAddTask(this.state.task);
        this.setState({task: ""});
    }

    styles = StyleSheet.create({
        input: {
            padding: 10,
            margin: 5,
            borderColor: "lightgrey",
            borderWidth: 1
        }
    });

    render() {
        return (
            <View>
                <TextInput  
                    style={this.styles.input}
                    placeholder="Escribe el nombre de la tarea"
                    onChangeText={(text) => this.onTaskInput(text)}
                    value={this.state.task} 
                />
                <View>
                    <Button title="Agregar" onPress={() => this.onAddTask()}
                    disabled={this.state.task.length === 0}/>
                    <Button title="Borrar" color="red" onPress={() => this.onCancel()}/>
                </View>
            </View>
        );
    }
}
