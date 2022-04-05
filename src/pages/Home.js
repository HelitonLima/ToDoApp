import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    Image
} from 'react-native';
import NewTaskButton from '../components/NewTaskButton';
import todoIcon from '../../assets/todo-icon.png'

export default function Home() {

    let [task, setTask] = useState('');
    let [myTasks, setMyTasks] = useState([
        {
            id: 0,
            name: 'Drink water'
        },
    ])

    function insertTask(task) {
        if (task.trim() != '') {
            const data = {
                id: String(new Date().getTime()),
                name: task
            };

            setMyTasks((oldState) => [...oldState, data]);
            setTask('');
        } else alert('Task name is required to insert.');
    }

    return (
        <View style={styles.container}>
            <NewTaskButton insert={insertTask} task={task} setTask={setTask} style={styles.newTask}></NewTaskButton>

            <FlatList
                style={{paddingBottom: 70}}
                data={myTasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskButton}>
                        <Image
                            style={styles.todoImage}
                            source={todoIcon}
                        />
                        <Text style={styles.taskButtonText}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250, 250, 250)',
        flex: 1
    },
    taskButton: {
        backgroundColor: '#FFF',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    },
    taskButtonText: {
        fontSize: 20,
        fontWeight: 400,
        color: 'rgb(217, 178, 192)'
    },
    todoImage: {
        width: 80,
        height: 80,
        marginRight: 20
    }
});