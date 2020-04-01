import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a38.jpeg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import log from '../assets/images/jpeg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';


export default class ForgotPassword extends Component {


  state={
    email:'',
    error:''
  }

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text, error:'Email is Not Correct'})
    return false;
      }
    else {
      this.setState({email:text, error:''})
      console.log("Email is Correct");
      
    }
    }



  render() {


    console.log(this.state);
    return (
      <ScrollView>
        <Container style={{backgroundColor: 'black'}}>
          <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
         <TouchableOpacity>
         <Icon onPress={() => this.props.navigation.goBack()} name="ios-arrow-back" style={{color:"white", marginTop:"5%", marginLeft:"4%", fontSize:30, fontWeight:"bold"}}></Icon>
         </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                fontSize: 25,
                marginTop: '5%',
                fontWeight: 'bold',
              }}>
              Forgot Password
            </Text>
            <Image
              source={log}
              style={{
               marginTop:"10%",
                alignSelf: 'center',
               height: '20%',
                width: '45%',
                alignSelf: 'center',
                borderRadius:20
              }}></Image>
            <Text
              style={{
                color: 'white',
                alignSelf:"center",
                fontSize: 17,
                fontWeight:"bold",
                marginTop: '10%',
              }}>
              Please enter your registered email ID.
            </Text>
            <Text
              style={{
                color: 'white',
               alignSelf:"center",
                fontSize: 14,
                marginTop: '1%',
                paddingLeft:"10%",
                paddingRight:"10%"
              }}>
              We will send a verification code to your registered email ID.
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
                  this.setState({email: text});
                  // this.validate(text);
                }}
                  placeholder="travel@log.com"
                  placeholderTextColor="white"
                  style={{color: 'white'}}
                />
              </Item>
              {this.state.error === "" ? null : <Text style={{color:"red",marginLeft:"10%"}}>{this.state.error}</Text> }
              <Button
              onPress={()=>{ 
                this.validate(this.state.email);
                this.state.error=== '' && this.state.email != '' ? this.props.navigation.push('RecoveryCode'):null
              }}
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
    );
  }
}
