/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../home/style';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build();
export const Stars = ({stars,showNumber }) =>{
    let s =[0,0,0,0,0];
    
    let floor = Math.floor(stars);
    let left = stars - floor;

    for(var i = 0; i < floor; i++){
        s[i] = 2;
    }
    if(left > 0){
        s[i] = 1;
    }
    return(
        <View style={styles.StarArea}>
            {s.map((i,k) => (
                <View key={k}>
                    {i === 0 && <Image style={styles.Starview} source={require('../assets/star_empty.png')} />}
                    {i === 1 && <Image style={styles.Starview} source={require('../assets/star_half.png')} />}
                    {i === 2 && <Image style={styles.Starview} source={require('../assets/star.png')} />}
                </View>
            ))}
             {showNumber && <Text style={styles.StarText}>{stars}</Text>}
        </View>
    );
}