import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  TextInput
} from 'react-native';
import map from '../assets/images/map.jpg';
import {BackgroundColor} from '../assets/Colors/Colors';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import IconWithText from '../components/IconAndText';

export default class ContactUs extends Component {

state={
  message:''
}


  render() {
    return (
      <ScrollView style={{backgroundColor:BackgroundColor}}>
        <View style={{height:'15%',backgroundColor:ThemeColor}}>
          <Text style={{color:"white", alignSelf:"center",paddingTop:"3%",fontSize:22, fontWeight:"bold"}}>Contact Us</Text>
        </View>
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
        <Text style={{marginTop:"5%"}}> Your Message</Text>
        <View  style={{ color: 'grey',
              width: '100%',
              height: '50%',
              width: '78%',
              marginLeft: '2.5%',
              marginRight: '2.5%',
              borderColor: 'grey',
              borderRadius: 8,
              borderWidth: 1,
              textAlignVertical:'top'}}>
         
        <TextInput multiline={true} style={{textAlignVertical:'top',height:"60%"}}></TextInput>
        </View>
        </View>

        
        
      </ScrollView>
    );
  }
}






{/* <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          width: '100%',
        }}>
        <Text style={{fontSize: 17, color: 'grey', marginBottom: 7}}>
          Add Description (optional)
        </Text>
        <View style={{}}>
          <TextInput
            value={this.state.message}
            multiline={true}
            style={{
              color: 'grey',
              width: '100%',
              height: '50%',
              width: '78%',
              marginLeft: '2.5%',
              marginRight: '2.5%',
              borderColor: 'grey',
              borderRadius: 8,
              borderWidth: 1,
              textAlignVertical:'top'
            }}
            onChangeText={text => {
              this.setState({message: text})
            }}></TextInput>
        </View>
      </View> */}