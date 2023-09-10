import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ToDo = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.index}>
                <Text style={styles.indexText}>{props.index}</Text>
            </View>
            <View style={styles.todo}>
                <Text style={styles.todoText}>{props.todo}</Text>
            </View>
            <Pressable onPress={() => props.deleteTodo()} style={styles.deleteContainer}>
                    <MaterialIcons name="delete" size={20} color="black" style={styles.deleteButton} />
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginVertical: 5,
    },
    todo : {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        flex: 1,
        minHeight: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
    },
    todoText : {
        color: 'black',
        fontSize: 18,
        width: '90%',
        fontWeight: 'bold',
    },
    index : {
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginRight: 10,
        borderColor: 'black',
        borderWidth: 2,
    },
    indexText : {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    deleteContainer : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton : {
        marginLeft: 10,
    }
});




export default ToDo;