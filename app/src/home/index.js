/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView,Image, ScrollView} from 'react-native';
import {styles} from './style';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LocationInputer } from '../components/LocationInputer';
import { BarberItem } from '../components/BarberItem';
import { useNavigation } from '@react-navigation/native';


EStyleSheet.build();

export const Home = () =>{
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.Scroller}>
        <View style={styles.HeaderArea}>
        <TouchableOpacity style={styles.SearchBtn} onPress={() => navigation.navigate('Login')}>
            <Image style={styles.SearchIcon} source={require('../assets/nav_prev.png')}/>
          </TouchableOpacity>
          <Text style={styles.HeaderTitle} numberOfLines={2}>Encontre o seu barbeiro favorito</Text>
          <TouchableOpacity style={styles.SearchBtn}>
            <Image style={styles.SearchIcon} source={require('../assets/search.png')}/>
          </TouchableOpacity>
        </View>
        <LocationInputer/>
        <View style={styles.ListArea}>
          <BarberItem nome={'Willian Motta'}  stars ={3}imagem= {require('../assets/willian.png')}/>
          <BarberItem nome={'Paulo Rubens'} stars ={4.7} imagem= {require('../assets/paulojpg.jpg')}/>
          <BarberItem nome={'Ana Bull'}  stars ={4.1} imagem= {require('../assets/ana.jpg')}/>
          <BarberItem nome={'Vinicius Rocha'} stars ={3.5} imagem= {require('../assets/vinicius.jpg')}/>
          <BarberItem nome={'Danielli Caovilla'}  stars ={3.2} imagem= {require('../assets/dani.jpg')}/>
          <BarberItem nome={'Natan Altomar'}  stars ={3.3} imagem= {require('../assets/natan.jpg')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}