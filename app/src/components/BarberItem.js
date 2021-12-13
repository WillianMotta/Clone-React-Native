/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from '../home/style';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Stars } from './Stars';

EStyleSheet.build();

export const BarberItem = ({nome, imagem,stars}) =>{
    return(
        <TouchableOpacity style={styles.Area}>
            <Image style={styles.Avatar} source={imagem}/>
            <View style={styles.InfoArea}>
                <Text style={styles.UserName}>{nome}</Text>
                <Stars stars={stars} showNumber={true}/>
                <View style={styles.SeeProfileButton}>
                    <Text style={styles.SeeProfileButtonText}>Ver perfil</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}