import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';
TextInput.defaultProps.selectionColor = 'coral' 

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
    Keyboard.dismiss();
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='New todo...'
        placeholderTextColor="#fff"
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={pressHandler} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 35,
    backgroundColor: '#ffc7c3',
    height: 35,
    fontSize: 20,
    padding: 5,
    color: 'white',
    paddingLeft: 10,
    marginBottom: 10,
  },
});