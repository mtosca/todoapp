import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TasksListScreen from './src/components/TasksListScreen'
import TaskDetailsScreen from './src/components/TaskDetailsSceen'
import TaskEditScreen from './src/components/TaksEditScreen'
import TasksDeleteScreen from './src/components/TasksDeleteSceen'

const stack = createStackNavigator({
  Tasks: TasksListScreen,
  Details: TaskDetailsScreen,
  TaskEditScreen: TaskEditScreen,
  TasksDeleteScreen: TasksDeleteScreen
}, {
  initialRouteName: 'Tasks'
});

export default createAppContainer(stack);