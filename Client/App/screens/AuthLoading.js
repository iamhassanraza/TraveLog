import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { ThemeColor } from '../assets/Colors/Colors';
import pic from '../assets/images/authloading.jpg'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';

export default class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('UserToken');
    console.log(userToken);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,backgroundColor:"white"}}>
  
 
        <Image
              source={pic}
              style={{
                height: '30%',
                width: '95%',
               marginTop:"40%"
              }}></Image>
               <WaveIndicator color={ThemeColor}  />
               
      </View>
    );
  }
}