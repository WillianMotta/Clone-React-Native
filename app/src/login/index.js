/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TouchableOpacity,Image, SafeAreaView,View} from 'react-native';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SingInput } from '../components/SingInput';
import { Passoword } from '../components/Passowrd';

EStyleSheet.build();

 

export const Login = () =>{

  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passowordField, setPassowordField] = useState('');

  const HandleClick = () =>{
    if(emailField != '' && passowordField != ''){
      navigation.navigate('Home');
    }else{
      alert('Preencha os campos!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/barber.png')}/>
      <View style={styles.inputArea}>
         <SingInput value={emailField}  onchangeText = {text => setEmailField(text)} />
         <Passoword value={passowordField}  onchangeText = {text => setPassowordField(text)}/>
        <TouchableOpacity onPress={ HandleClick }
        style={styles.btn}>
          <Text style={styles.texto}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singMessageBtn}>
          <Text style={styles.singMessageTextBtn}>Ainda não possui uma conta?</Text>
          <Text style={styles.singMessageTextBoldBtn}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}