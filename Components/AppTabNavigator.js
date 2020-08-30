import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,TextInput,Image } from 'react-native';
import RequestingScreen from '../screens/RequestingScreen';
import DonatingScreen from '../screens/DonatingScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    DonatingItems:{
        screen: DonatingScreen,
        navigationOptions: {
            tabBarIcon: < Image
            source = {require("../assets/image2.jpg")}
            style = {{width:40,height:40}}
            />,
            tabBarLabel:"Donate Items"
        }
    },

    RequestItems:{
        screen:RequestingScreen,
        navigationOptions:{
            tabBarIcon:<Image
            source = {require("../assets/image1.jpg")}
            style = {{width:40,height:40,backgroundColor:'#4A148C'}}
            />,
            tabBarLabel:"Request Items"
        }
    }
})