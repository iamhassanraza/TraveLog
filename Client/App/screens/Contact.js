import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet, Dimensions} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a4.jpg';
import {ThemeColor,ThemeGrey} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png';
import fb from '../assets/images/fb.png';
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/logo.png';
import map from '../assets/images/map.jpg';
import IconWithText from '../components/IconAndText';

export default class Contact extends Component {
  state = {
    email: '',
    
  };





  render() {

    console.log(this.state);
    return (
      <ScrollView>
          
        <Container style={{backgroundColor: 'white'}}>
        <View style={{height:'8%',backgroundColor:ThemeColor}}>
          <Text style={{color:"white", alignSelf:"center",paddingTop:"3%",fontSize:22, fontWeight:"bold"}}>Contact Us</Text>
        </View>

        <ImageBackground
            source={map}
            style={{
              height: Dimensions.get('window').height / 3.7,
              width: Dimensions.get('window').width / 1,
            }}></ImageBackground>

            
            <Content
              style={{
                
                marginTop: '5%',
                paddingBottom: '30%',
               
                marginRight: '2.5%',
                borderRadius: 20,
              }}>

<View style={{ paddingRight:"1%"}}>

<View style={{backgroundColor:"white", marginBottom:"1%", marginTop:"1%"}}>
  <IconWithText
    text={'Office 304 , Anum Blessings P.E.C.H.S Karachi'}
    name={'map-marker'}
    textstyle={{fontSize:15}}
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
              <Text
                style={{
                marginTop:"5%",
                  fontSize: 25,
                  color: ThemeColor,
                  fontWeight: 'bold',
                  alignSelf:"center"
                }}>
                {' '}
                Message{' '}
              </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                color="black"
          
                onChangeText={text => {
                  this.setState({email: text});
                  // this.validate(text);
                }}
                  placeholder="travel@log.com"
                  placeholderTextColor="black"
                  style={{color: 'white'}}
                />
              </Item>



             

              <Button
                onPress={()=>{
                //   this.validate(this.state.email);
                //   this.props.navigation.push('RootStack')
              
                }}
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: '3%',
                  backgroundColor: ThemeColor,
                  marginBottom: '2%',
                  width: '40%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                  Send
                </Text>
              </Button>
            </Content>
          
          
        </Container>
      </ScrollView>
    );
  }
}
