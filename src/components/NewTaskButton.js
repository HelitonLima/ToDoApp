import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';

const NewTaskButton = (props) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.newTaskField}
                placeholder='Type your task here'
                value={props.task}
                onChangeText={props.setTask}
            ></TextInput>

            <TouchableOpacity onPress={() => props.insert(props.task)} style={styles.newTaskButton}>
                <Text style={styles.newTaskButtonText}>Insert</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NewTaskButton;

const styles = StyleSheet.create({
    newTaskField: {
        padding: 10,
        fontSize: 16,
        borderColor: 'rgb(235, 63, 126)',
        paddingInlineStart: 20,
        borderWidth: 1,
        borderRadius: 20,
        color: 'rgb(235, 63, 126)',
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: 999,
        backgroundColor: '#FFF',
        borderTopwidth: 1,
        borderTopColor: '#f5f5f5'
    },
    newTaskButton: {
        padding: 10,
        marginLeft: 10
    },
    newTaskButtonText: {
        color: 'rgb(235, 63, 126)',
        fontWeight: 'bold'
    }
})