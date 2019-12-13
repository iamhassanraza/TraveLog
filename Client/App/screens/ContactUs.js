import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import map from '../assets/images/map.jpg';
import {BackgroundColor} from '../assets/Colors/Colors';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import IconWithText from '../components/IconAndText';

export default class ContactUs extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:BackgroundColor}}>
        <View>
          <ImageBackground
            source={map}
            style={{
              height: Dimensions.get('window').height / 3.7,
              width: Dimensions.get('window').width / 1,
            }}></ImageBackground>
        </View>

        <View style={{paddingLeft:"1%", paddingRight:"1%"}}>

        <View style={{backgroundColor:"white", marginBottom:"1%", marginTop:"1%"}}>
          <IconWithText
            text={'Office 304 , Anum Blessings P.E.C.H.S Karachi'}
            name={'map-marker'}
            textstyle={{fontSize:15, marginLeft:"2%"}}
            iconstyle={{fontSize:30}}
            
            ></IconWithText>
        </View>

        <View style={{ backgroundColor:"white", marginBottom:"1%"}}>
          <IconWithText text={'03132055798'} name={'phone'} textstyle={{fontSize:15 , marginLeft:"2%"}}
            iconstyle={{fontSize:30}}></IconWithText>
        </View>


        <View style={{ backgroundColor:"white", marginBottom:"1%"}}>
          <IconWithText
            text={'salimehdi144@gmai.com'}
            name={'email'} textstyle={{fontSize:15, marginLeft:"2%"}}
            iconstyle={{fontSize:30}}></IconWithText>
        </View>


        </View>
        
      </ScrollView>
    );
  }
}
