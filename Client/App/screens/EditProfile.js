import React, { Component } from 'react'
import { Text, View, ImageBackground,Image,ScrollView } from 'react-native'
import head from '../assets/images/blueHead.png'
import pic from '../assets/images/pf.jpeg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColor} from '../assets/Colors/Colors' 
import {Container, Header, Content, Item, Input, Button} from 'native-base';

export default class EditProfile extends Component {
    render() {
        return (
            <ScrollView>
            <Container style={{backgroundColor: 'black'}}>
              <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
                <TouchableOpacity>
                  <Icon
                  onPress={() => this.props.navigation.goBack()}
                    name="ios-arrow-back"
                    style={{
                      color: 'white',
                      marginTop: '5%',
                      marginLeft: '4%',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}></Icon>
                </TouchableOpacity>
                <Image
                  source={log}
                  style={{
                    height: '20%',
                    width: '35%',
                    alignSelf: 'center',
                    marginTop: '2%',
                  }}></Image>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: '5%',
                  }}>
                  Change Password
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
                      placeholderTextColor="white"
                      style={{color: 'white'}}
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
                      placeholderTextColor="white"
                      style={{color: 'white'}}
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
              </ImageBackground>
            </Container>
          </ScrollView>

        )
    }
}
