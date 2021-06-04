import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native'

export default function StatusBarPages(props){
    const isFocus = useIsFocused();
    return isFocus ? <StatusBar {...props}/> : null
}