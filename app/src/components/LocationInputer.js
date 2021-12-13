/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Image, TextInput,TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const LocationInputer = () =>{
    return(
        <View style={styles.LocationArea}>
        <TextInput style={styles.LocationInput} placeholder='Onde você está?' placeholderTextColor={'#ffffff'}></TextInput>
        <TouchableOpacity style={styles.LocationFinder}>
             <Image  style={styles.MyLocationIcon} source={require('../assets/my_location.png')}/> 
          </TouchableOpacity> 
       </View> 
    );
}