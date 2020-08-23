import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    // { text: 'buy coffee', key: '1' },
    // { text: 'create an app', key: '2' },
    // { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3 && (text.length <= 120)){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } 
    if (text.length > 120){
      Alert.alert('OOPS', 'Todo must be less than 120 characters', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
    if((text.length <= 3)) {
      Alert.alert('OOPS', 'Todo must be more than 3 characters', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
      <StatusBar backgroundColor="coral" barStyle='light-content' />
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    flex: 1,
  },
  list: {
    marginTop: 5,
    flex: 1,
  },
});