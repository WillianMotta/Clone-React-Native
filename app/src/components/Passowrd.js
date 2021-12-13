/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image,TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const Passoword = ({value, onchangeText}) =>{
    return(
        <View style={styles.inputArea}>
            <Image style={styles.IconPngS} source={require('../assets/lock.png')}/>
            <TextInput style={styles.InputText} placeholder='Digite sua senha.' value={value} onChangeText={onchangeText} secureTextEntry={true}></TextInput>
        </View>
    );
}