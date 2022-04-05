import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: '100%'
    },
    title: {
        color: 'rgb(235, 63, 126)',
        fontWeight: 'bold',
        fontSize: 18
    }
});