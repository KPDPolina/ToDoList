import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
    return (
        <View style={styles.item}>
            <View style={{ flex: 1, }}>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' size={20} color='#333' />
            </TouchableOpacity>                 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 10,

        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dotted",
        borderRadius: 15,
        backgroundColor: "#ffc7c3",

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        paddingEnd: 10,
        marginLeft: 10,
    }
});