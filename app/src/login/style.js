/* eslint-disable prettier/prettier */
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#63C2D1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    fontSize: '1.5rem',
    color:'#fff',
  },

  inputArea:{
    with:'100%',
    padding: 30,
  },

  btn: {
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#268596',
    height: 60,
    padding: '3.5%',
    marginTop:'8%',
  },

  btnText:{
    fontSize:'1.5rem',
    color: '#fff',
  },

  singMessageBtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBotton: 20,
  },

  singMessageTextBtn:{
    fontSize: '1.1rem',
    color:'#268596',
  },

  singMessageTextBoldBtn:{
    fontSize: '1.1rem',
    color:'#268596',
    fontWeight:'bold',
    marginLeft: 5,
  },
  
  logo:{
    height: 150,
    width: '60%',
    alignItems:'center',
    justifyContent:'center',
  }
});