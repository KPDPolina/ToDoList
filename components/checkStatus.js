import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function CheckStatus(checkStatus ) {
    if (checkStatus == true) {
        return (
            <MaterialIcons name="check-box" size={24}  color='#333' />)
    } else {
        return (
            <MaterialIcons name="check-box-outline-blank" size={24}  color='#333' />
        )
    }
}