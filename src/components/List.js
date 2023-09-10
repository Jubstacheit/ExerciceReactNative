import React, { useState } from "react"
import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput, Pressable, Platform } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const List = (props) => {

    const [todo, setTodo] = useState();

    const handleAddTodo = (value) => {
        props.addTodo(value)
        setTodo('')
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.inputContainer}>
            <TextInput 
            style={styles.inputField} 
            value={todo} 
            onChangeText={text => setTodo(text)} 
            placeholder={'Écrivez une tâche'} 
            placeholderTextColor={'#fff'} />
            <Pressable onPress={() => handleAddTodo(todo)}>
                <View style={styles.addButton}>
                    <MaterialIcons name="keyboard-arrow-up" size={20} color="#000" />
                </View>
            </Pressable>
        </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    inputContainer : {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField : {
        color: 'black',
        height: 50,
        flex: 1,
    },
    index : {
        backgroundColor: 'blue',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        marginRight: 10,
    },
    indexText : {
        color: '#fff',
        fontSize: 16,
    },
    todo : {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    todoText : {
        color: '#fff',
        fontSize: 16,
        width: '80%',
    },
    deleteButton : {
        marginLeft: 10,
    },
    addButton : {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#8da0d6',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
})

export default List;