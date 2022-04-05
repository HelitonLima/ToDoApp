import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';

const DeleteTaskButton = (props) => {

    return (
        <View style={styles.container}>
            
            

            <TouchableOpacity onPress={()=>deletarfilme(item.id)}>
                <Text style={styles.newTaskButtonText}>Insert</Text>
            </TouchableOpacity>

            
            
        </View>
    );
}