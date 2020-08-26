import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '0', status: false },
    { text: 'create an app', key: '1', status: false },
    { text: 'play on the switch', key: '2', status: false },
  ]);

  ///при нажатии выводим новый массив без нажатого элемента
  const pressDel = (key) => {
    setTodos(prevTodos => {
      console.log(key);
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  ///при нажатии меняем статус элемента
  const pressStatus = (key) => {
    setTodos(prevTodos => {
      // console.log(prevTodos.find(todo => todo.key == key).status);
      prevTodos.find(todo => todo.key == key).status = !(prevTodos.find(todo => todo.key == key).status);
      console.log(prevTodos.find(todo => todo.key == key).status);
      return prevTodos;
    });
  };

  ///проверка статуса(должна происходить при нажатии...)
  const checkStatus = (key) => {
    setTodos(prevTodos => {
      return prevTodos.find(todo => todo.key == key).status;
    });
  };

  const submitHandler = (text) => {
    if (text.length > 2 && (text.length <= 120)) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random(2, 10).toString(), status: false },
          ...prevTodos
        ];
      });
    }
    if (text.length > 120) {
      Alert.alert('OOPS', 'Todo must be less than 120 characters', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
    if ((text.length <= 2)) {
      Alert.alert('OOPS', 'Todo must be more than 2 characters', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
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
                <TodoItem item={item} pressDel={pressDel} pressStatus={pressStatus} checkStatus={checkStatus}/>// pressHandler={pressHandler}
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
    padding: 5,
    flex: 1,
  },
  list: {
    marginTop: 5,
    flex: 1,
  },
});