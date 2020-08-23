import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 15,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: "italic",
  }
});