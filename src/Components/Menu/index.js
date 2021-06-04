import React from 'react';
import { View, Text } from 'react-native';
import {ButtonMenu} from './styles';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
export default function Menu() {
    const navigation = useNavigation();
 return (
   <ButtonMenu onPress={()=>{navigation.openDrawer()}}>
       <Feather name="menu" size={30} color="#fff"/>
   </ButtonMenu>
  );
}