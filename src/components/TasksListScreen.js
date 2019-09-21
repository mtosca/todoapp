import React, { Component } from 'react'
import { View, StyleSheet, Button, Keyboard } from 'react-native'
import NoTasks from './NoTasks'
import TaskList from './TaskList'
import AddTask from './AddTask'
import { retrieveTasks, storeTasks, clearTasks } from 'storage'

export default class TasksListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        retrieveTasks((tasks) => this.setState(tasks));
    }
    
    addTask(task) {
        Keyboard.dismiss();
        const newTask = this.createTask(task);
        this.setState({
                // spread operator
                tasks: [newTask, ...this.state.tasks]
            }, 
            () => storeTasks(this.state.tasks)
        );
    }

    // crea una nueva tarea asignando el ID correspondiente, 0 o N
    createTask(title){
        let id = 0;
        if (this.state.tasks && this.state.tasks.length > 0) {
            id = String(this.state.tasks.length);
        }
        return {
            id,
            title: title,
            status: false
        }
    }

    openLocation() {
        const url = {};
        Linking.openUrl(url);
    }

    render() {

        const styles = StyleSheet.create({
            headerBar: {
                marginTop: 35,
                padding: 10,
                backgroundColor: "lightblue"
            }
        });
    
        return (
            <View>
                <View>
                    <AddTask 
                        onAddTask={(tarea) => this.addTask(tarea)}
                    />
                    {(!this.state.tasks || this.state.tasks.length === 0) ? (
                        <NoTasks />
                    ) : (
                        <View>
                            <TaskList 
                                tasks={this.state.tasks} 
                                navigation={this.props.navigation} 
                            />
                        </View>
                    )}
                </View>
                <Button 
                    title="Vaciar lista" 
                    onPress={() => clearTasks(() => this.setState({tasks: []}))}
                />
                <Button
                    title="Abrir ubicación"
                    onPress={() => this.openLocation()}
                />
            </View>
        );
    }
}
