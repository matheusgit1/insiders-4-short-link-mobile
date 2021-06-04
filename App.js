import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Routes from './src/Routes/routes';
import {NavigationContainer} from '@react-navigation/native';
export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer> 
  );
}