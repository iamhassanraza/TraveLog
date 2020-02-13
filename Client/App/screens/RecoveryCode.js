import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a14.jpg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import log from '../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default class RecoveryCode extends Component {

state={
  code:''
}

    render() {
      console.log(this.state)
        return (
            <ScrollView>
        <Container style={{backgroundColor: 'black'}}>
          <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
         <TouchableOpacity>
         <Icon name="ios-arrow-back" style={{color:"white", marginTop:"5%", marginLeft:"4%", fontSize:30, fontWeight:"bold"}}></Icon>
         </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                fontSize: 25,
                marginTop: '5%',
                fontWeight: 'bold',
              }}>
              Verification Code
            </Text>
            <Image
              source={log}
              style={{
                height: '20%',
                width: '35%',
                alignSelf: 'center',
                marginTop: '15%',
              }}></Image>
            <Text
              style={{
                color: 'white',
                paddingLeft:"10%",
                paddingRight:"10%",
                fontSize: 17,
                fontWeight:"bold",
                marginTop: '10%',
              }}>
              Please enter your Verification Code.
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft:"10%",
                paddingRight:"10%",
                fontSize: 14,
                marginTop: '1%',
                
              }}>
              We have sent a verification code to your registered email ID.
            </Text>
            <Content
              style={{
                paddingTop: '5%',
                marginTop: '5%',
                paddingBottom: '30%',
                marginLeft: '5%',
                marginRight: '5%',
                borderRadius: 20,
              }}>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                onChangeText={text => {
                  this.setState({code: text});
                }}
                  placeholder="* * * * * *"
                  placeholderTextColor="white"
                  style={{color: 'white'}}
                />
              </Item>

              <Button
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: '7%',
                  backgroundColor: ThemeColor,
                  marginBottom: '2%',
                  width: '40%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                  Next
                </Text>
              </Button>
            </Content>
          </ImageBackground>
        </Container>
      </ScrollView>
        )
    }
}
