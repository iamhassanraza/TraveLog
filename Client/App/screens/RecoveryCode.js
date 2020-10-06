import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a35.jpeg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import log from '../assets/images/jpeg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

export default class RecoveryCode extends Component {

state={
  code:''
}


checkOTP = async () => {
  const email = await this.props.navigation.getParam('email', 'no email');

  if (this.state.code !== '') {
    this.setState({
      spinner: true,
    });
    const Response = await fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/user/verify_otp?otp=${
        this.state.code
      }&type=reset_password&email=${email}`,
    );
    const JsonResponse = await Response.json();
    this.setState({
      spinner: false,
    });

    if (parseInt(Response.status) === 404) {
      alert(JsonResponse.message);
    } else if (parseInt(Response.status) === 200) {
      this.props.navigation.navigate('ResetPassword', {
        OTP: this.state.code,
        email,
      });
      this.setState({code: ''});
    } else {
      alert('something went wront');
    }
  } else {
    alert('Enter CODE');
  }
};

    render() {
      console.log(this.state)
        return (
            <ScrollView>
        <Container>
            
            <Image
              source={log}
              style={{
                height: '20%',
                width: '65%',
                alignSelf: 'center',
                borderRadius:20,
                marginTop: '10%',
              }}></Image>

<Text
              style={{
                color: ThemeColor,
                alignSelf: 'center',
                fontSize: 25,
                marginTop: '15%',
                fontWeight: 'bold',
              }}>
              Verification Code
            </Text>

            <Text
              style={{
                color: '#64a6d1',
                paddingLeft:"10%",
                paddingRight:"10%",
                fontSize: 17,
                fontWeight:"bold",
                marginTop: '5%',
              }}>
              Please enter your Verification Code.
            </Text>
            <Text
              style={{
                color: '#64a6d1',
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
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor}}
                />
              </Item>

              <Button
              onPress={() => this.checkOTP()}
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
 
        </Container>
      </ScrollView>
        )
    }
}
