import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a38.jpeg';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import log from '../assets/images/jpeg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ForgotPassword extends Component {
  state = {
    email: '',
    error: '',
  };

  validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      this.setState({email: text, error: 'Email is Not Correct'});
      return false;
    } else {
      this.setState({email: text, error: ''});
      console.log('Email is Correct');
      return true;
    }
  };

  sendOTP = async () => {
    if (this.validate(this.state.email)) {
      this.setState({spinner: true});
      const Response = await fetch(
        `https://travelog-adonis.herokuapp.com/api/v1/user/send_otp?email=${
          this.state.email
        }&type=reset_password`,
      );
      const JsonResponse = await Response.json();
      this.setState({spinner: false});
      console.log(JsonResponse);
      if (parseInt(Response.status) === 404) {
        alert(JsonResponse.message);
      } else if (parseInt(Response.status) === 200) {
        this.props.navigation.navigate('RecoveryCode', {
          email: this.state.email,
        });
      } else {
        alert('something went wrong');
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <Container>
          {/* <ImageBackground source={pic} style={{width: '100%', height: '100%'}}> */}
          <TouchableOpacity>
            {/* <Icon onPress={() => this.props.navigation.goBack()} name="ios-arrow-back" style={{color:"white", marginTop:"5%", marginLeft:"4%", fontSize:30, fontWeight:"bold"}}></Icon> */}
          </TouchableOpacity>

          <Image
            source={log}
            style={{
              marginTop: '10%',
              alignSelf: 'center',
              height: '20%',
              width: '65%',
              alignSelf: 'center',
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              color: ThemeColor,
              alignSelf: 'center',
              fontSize: 25,
              marginTop: '10%',
              fontWeight: 'bold',
            }}>
            Forgot Password
          </Text>
          <Text
            style={{
              color: '#64a6d1',
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: '5%',
            }}>
            Please enter your registered email ID.
          </Text>
          <Text
            style={{
              color: '#64a6d1',
              alignSelf: 'center',
              fontSize: 14,
              marginTop: '1%',
              paddingLeft: '10%',
              paddingRight: '10%',
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
                placeholderTextColor="#ebeced"
                style={{
                  color: ThemeColor,
                  borderBottomWidth: 2,
                  borderColor: ThemeColor,
                }}
              />
            </Item>
            {this.state.error === '' ? null : (
              <Text style={{color: 'red', marginLeft: '10%'}}>
                {this.state.error}
              </Text>
            )}
            <Button
              onPress={() => {
                this.state.error === '' &&
                  this.state.email != '' &&
                  this.sendOTP();
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
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Next
              </Text>
            </Button>
          </Content>
          {/* </ImageBackground> */}
        </Container>
      </ScrollView>
    );
  }
}
