import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TaskButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.function(props.id) }>
            <AntDesign name={props.icon} size={20} color="red" />
        </TouchableOpacity>
    );
}

export default TaskButton;