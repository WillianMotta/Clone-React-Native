/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login } from '../login';
import { Home } from '../home';

const Stack = createStackNavigator(); 

export const Routes = () =>{
    return(
       <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
           <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Home' component={Home}/>
       </Stack.Navigator> 
    );
}