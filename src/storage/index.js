import AsyncStorage from '@react-native-community/async-storage'

const APP_STORAGE_KEY = "@TodoApp";

async function retrieveTasks(callback) {
    try {
        const stringTasks = await AsyncStorage.getItem(`${APP_STORAGE_KEY}/tasks`);
        const jsonTasks = JSON.parse(stringTasks);
        if (jsonTasks != null) {
            const { tasks } = jsonTasks;
            callback({tasks});
        }
    } catch(e) {
        alert("Error getting data! " + e);
    }
}

async function storeTasks(tasks) {
    try {
        await AsyncStorage.setItem(`${APP_STORAGE_KEY}/tasks`, JSON.stringify({tasks}));
    } catch (e) {
        alert("Error setting data! " + e);
    }
}

async function clearTasks(callback) {
    try {
        let empty = {tasks:[]};
        let stringData = JSON.stringify(empty);
        await AsyncStorage.setItem(`${APP_STORAGE_KEY}/tasks`, stringData, callback());
    } catch (error) {
        alert("Error clearing data! " + e);
    }
}

export {
    retrieveTasks,
    storeTasks,
    clearTasks
}