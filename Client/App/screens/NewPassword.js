import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a16.jpg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png';
import fb from '../assets/images/fb.png';
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/jpeg.jpg';

export default class NewPassword extends Component {
  state = {
    newPass: '',
    confirmPass: '',
    error: '',
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Container>
          {/* <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
             */}
            <Image
              source={log}
              style={{
                height: '35%',
                width: '65%',
                alignSelf: 'center',
                borderRadius:20,
                marginTop: '2%',
              }}></Image>
            {/* <Text
              style={{
                color: ThemeColor,
                alignSelf: 'center',
                fontSize: 28,
                fontWeight: 'bold',
                marginTop: '5%',
              }}>
              Change Password
            </Text> */}
            <Content
              style={{
                paddingTop: '5%',
                marginTop: '5%',
                paddingBottom: '30%',
                marginLeft: '5%',
                marginRight: '5%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  marginLeft: '10%',
                  fontSize: 20,
                  color: ThemeColor,
                  fontWeight: 'bold',
                }}>
                New Password
              </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({newPass: text});
                  }}
                  secureTextEntry={true}
                  placeholder="*********"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor}}
                />
              </Item>

              <Text
                style={{
                  marginLeft: '10%',
                  fontSize: 20,
                  color: ThemeColor,
                  marginTop: '5%',
                  fontWeight: 'bold',
                }}>
                Confirm Password
              </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({confirmPass: text});
                  }}
                  secureTextEntry={true}
                  placeholder="*********"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor}}
                />
              </Item>



              {this.state.error === '' ? null : (
                <Text style={{color:"red", marginLeft:"10%"}}> {this.state.error} </Text>
              )}

              <Button
                onPress={() => {
                  this.state.newPass != this.state.confirmPass
                    ? this.setState({error: ' Password Not Matched !'})
                    : 
                    this.setState({error:''});
                    this.props.navigation.push('Login');
                }}
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: '7%',
                  backgroundColor: ThemeColor,
                  marginBottom: '2%',
                  width: '60%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold',alignSelf:"center"}}>
                  Change Password
                </Text>
              </Button>
            </Content>
      
        </Container>
      </ScrollView>
    );
  }
}
