/* eslint-disable prettier/prettier */
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    inputArea:{
        with: '100%',
        height: 60,
        backgroundColor:'#83D6E3',
        flexDirection: 'row',
        borderRadius: 30,
        paddingLeft: 15,
        alingItems: 'center',
        marginTop: 15,
    },

    IconPngS: {
        width: 20,
        height: 20,
        marginTop:17,
        marginRight: 10,
        tintColor:'#268596',
    },

    InputText:{
        flex:1,
        fontSize:'1.1rem',
        color:'#268596',
        alignItems:'center',
    },
    LocationArea:{
        backgroundColor:'#4EADBE',
        height: 60,
        borderRadius: 30,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
    },
    
    LocationInput:{
        flex: 1,
        fontSize: 16,
        color:'#ffffff',
    },

   
    LocationFinder:{
        width: 24,
        height: 24,
    },
    MyLocationIcon:{
        width: 26,
        height: 26,
        tintColor:'#ffffff',
    },
});