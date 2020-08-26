import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CheckStatus from './checkStatus';

export default function TodoItem({ item, pressDel, pressStatus, checkStatus }) {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.item}>
            <TouchableOpacity onPress={() => pressStatus(item.key)}>

                {/* Не знаю как сделать, чтобы оно после каждого изменения статуса проверяло его и меняло чек бокс. */}
                <CheckStatus checkStatus={checkStatus} />
            </TouchableOpacity>
            <View style={{ flex: 1, }}>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => pressDel(item.key)}>
                    <MaterialIcons name='delete' size={24} color='#333' />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
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
        marginLeft: 5,
    }
});