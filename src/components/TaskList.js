import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight } from 'react-native'
import TaskItem from './TaskItem';

export default class TaskList extends Component {

    constructor(props) {
        super(props);
    }

    _onPress(item) {
        const { navigation } = this.props;

        navigation.navigate('Details', item);
    }


    render() {
        
        const { navigation } = this.props.navigation;

        return (
            <View>
                <FlatList
                    data={this.props.tasks}
                    renderItem={({item}) => <TaskItem task={item} />}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item, index, separators}) => (
                        <TouchableHighlight
                          onPress={() => this._onPress(item)}
                          onShowUnderlay={separators.highlight}
                          onHideUnderlay={separators.unhighlight}>
                          <View style={{backgroundColor: 'white'}}>
                            <Text>{item.title}</Text>
                          </View>
                        </TouchableHighlight>
                      )}
                />
            </View>
        );
    }
}
