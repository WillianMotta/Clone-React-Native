/* eslint-disable prettier/prettier */
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#63C2D1',
    flex: 1,
  },
  Scroller:{
    flex: 1,
    padding: 20,
  },

  HeaderArea:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  HeaderTitle:{
    width: 250,
    fontSize: 24,
    fontWeight:'bold',
    color: '#ffffff',
  },
  SearchBtn:{
    width: 26,
    height: 26,
  },
  SearchIcon:{
    width: 26,
    height: 26,
    tintColor:'#ffffff',
  },
  ListArea:{
    marginTop: 30,
    marginBottom: 30,
  },

  Area:{
    backgroundColor:'#ffffff',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection:'row',
  },

  Avatar:{
    width: 88,
    height: 88,
    borderRadius: 20,
  },
  InfoArea:{
    marginLeft: 20,
    justifyContent:'space-between',
  },
  UserName:{
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  SeeProfileButton:{
    width: 85,
    height: 26,
    border: 1 ,
    borderColor:'#4EADBE',
    borderStyle:'solid',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
  },

  SeeProfileButtonText:{
    fontSize: '1.0rem',
    color:'#268596',
  },

  StarArea:{
    flexDirection:'row',
  },

  Starview:{
    width: 18,
    height: 18,
    tintColor: '#FF9200',
  },

  StarText:{
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    color:'#737373',
  },
});