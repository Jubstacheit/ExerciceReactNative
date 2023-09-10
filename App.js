import { TextInput, View, Text, StyleSheet, Pressable, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import List from './src/components/List';
import ToDo from './src/components/ToDo';

export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo == '') return;
    setTodos([...todos, todo]);
    Keyboard.dismiss();
  }

  const deleteTodo = (deleteIndex) => {
    setTodos(todos.filter((todo, index) => index != deleteIndex));
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        To-do list app
      </Text>
      <ScrollView style={styles.scrolling}>
        {todos.map((todo, index) => {
          return (
            <ToDo 
              style={styles.todo}
              key={index}
              todo={todo} 
              index={index + 1} 
              deleteTodo={() => deleteTodo(index)} 
            />
          )
        })}
      </ScrollView>
      <List addTodo={addTodo} />
    </View>
  );
}

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#bebebe',
    },
    title : {
      color:'#000000',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20,
      marginLeft: 20,
    },
    scrolling : {
      marginBottom: 30,
    },
    todo : {
      margin: 40,
    }
});