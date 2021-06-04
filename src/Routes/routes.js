import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Ionicons} from '@expo/vector-icons'
import Home  from '../pages/Home';
import Links from '../pages/MyLinks';
const Drawer = createDrawerNavigator();
export default function Routes(){
    return(
        <Drawer.Navigator drawerContentOptions={{
            activeBackgroundColor: '#2ccbb9', activeTintColor: '#fff',
            marginTop: 10, labelStyle:{fontSize: 18}
        }}>
            <Drawer.Screen options={{title: "Encurtar Link",
            drawerIcon: ({focused, size, color})=>(<Ionicons name={focused ? "cube" : "cube-outline"} color={color} size={size}/>) }}
            name="Home" component={Home}/>

            <Drawer.Screen options={{title: "Meus Links",
            drawerIcon: ({focused, size, color})=>(<Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} color={color} size={size}/>) }}
             name="Links" component={Links}/>
        </Drawer.Navigator>
    );
}