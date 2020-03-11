import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a36.jpeg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png';
import fb from '../assets/images/fb.png';
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/logo.png';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
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
    }
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Container style={{backgroundColor: 'black'}}>
          <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
           <View style={{flexDirection:"row"}}>
           <TouchableOpacity>
              <Icon
                onPress={() => this.props.navigation.push('Selection')}
                name="ios-arrow-back"
                style={{
                  color: 'white',
                  paddingTop: '6%',
                  paddingLeft: '4%',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}></Icon>
            </TouchableOpacity>
            {/* <Text style={{fontSize:40,color:"white", alignSelf:"center", fontWeight:"bold",paddingTop:"2%", paddingLeft:"3%"}}> Sign Up</Text> */}
           </View>
            {/* <Image
              source={log}
              style={{
                height: '20%',
                width: '35%',
                alignSelf: 'center',
              }}></Image> */}
            <Content
              style={{
                
                marginTop: '1%',
                paddingBottom: '30%',
                marginLeft: '5%',
                marginRight: '5%',
                borderRadius: 20,
              }}>
                
              <Text style={styles.Title}> User Name</Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({name: text});
                  }}
                  placeholder="Lionel Messi "
                  placeholderTextColor="white"
                  style={{color: 'white'}}
                />
              </Item>

              <Text style={styles.Title}> User Email </Text>
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
              {this.state.error === '' ? null : (
                <Text style={{color: 'red', marginLeft: '10%'}}>
                  {this.state.error}
                </Text>
              )}

              <Text style={styles.Title}> Password </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                  secureTextEntry={true}
                  placeholder="* * * * * "
                  placeholderTextColor="white"
                  style={{color: 'white'}}
                />
              </Item>

              <Text style={styles.Title}> Contact No</Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({Contact: text});
                  }}
                  placeholder="03139099324 "
                  placeholderTextColor="white"
                  style={{color: 'white'}}
                />
              </Item>

              <Button
                onPress={() => {
                  this.validate(this.state.email);
                  this.props.navigation.push('RootStack');
                }}
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: '5%',
                  backgroundColor: ThemeColor,
                  marginBottom: '1%',
                  width: '40%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                  Signup
                </Text>
              </Button>
            </Content>

            <View
              style={{justifyContent: 'space-around', flexDirection: 'row', paddingBottom:"2%"}}>
              <Button
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: 0,
                  backgroundColor: 'white',
                  width: '35%',
                  alignSelf: 'center',
                }}>
                <Image source={fb} style={{height: 20, width: 20}}></Image>
                <Text
                  style={{
                    color: '#3b5998',
                    fontWeight: 'bold',
                    paddingLeft: '4%',
                  }}>
                  Facebook
                </Text>
              </Button>
              <Button
                rounded
                style={{
                  justifyContent: 'center',
                  marginTop: 0,
                  backgroundColor: 'white',
                  width: '35%',
                  alignSelf: 'center',
                }}>
                <Image source={gmail} style={{height: 20, width: 20}}></Image>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    paddingLeft: '4%',
                  }}>
                  Google
                </Text>
              </Button>
            </View>
          </ImageBackground>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    marginLeft: '10%',
    fontSize: 20,
    color: 'white',
    marginTop: '5%',
    fontWeight: 'bold',
  },
});
