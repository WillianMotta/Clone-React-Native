/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Image, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const SingInput = ({value, onchangeText}) =>{
    return(
        <View style={styles.inputArea}>
           <Image style={styles.IconPngS} source={require('../assets/email.png')}/>
           <TextInput style={styles.InputText} placeholder='Digite seu e-mail.' value={value} onChangeText={onchangeText}></TextInput>
        </View>
    );
}