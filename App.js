import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {





  return (
    <View style={styles.container}>
      <Text style={styles.title}>hi welcome to chili's</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        marginRight: 40,
        marginLeft: 40,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        top: -50,
    },
});