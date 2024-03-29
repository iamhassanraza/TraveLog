import React from 'react';
import {
  AsyncStorage,
  View,
  Image,
} from 'react-native';
import { ThemeColor } from '../assets/Colors/Colors';
import pic from '../assets/images/authloading.jpg'
import {
    WaveIndicator,
    
  } from 'react-native-indicators';

export default class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
   if(User != null){
    this.props.navigation.navigate(User.token ? 'App' : 'Auth');

   }else{
    this.props.navigation.navigate('Auth');

   }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,backgroundColor:"white"}}>
  
 
        <Image
              source={pic}
              style={{
                height: '30%',
                width: '75%',
               marginTop:"5%",
               alignSelf:'center'
              }}></Image>
               <WaveIndicator style={{marginTop:'-100%'}} color={ThemeColor}  />
               
      </View>
    );
  }
}