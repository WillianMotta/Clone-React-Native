/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';


export const App = () => {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
};
