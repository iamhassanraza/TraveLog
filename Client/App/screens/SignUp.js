import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a36.jpeg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png';
import fb from '../assets/images/fb.png';
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/jpeg.jpg';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    contact: '',
    confirmPassword: '',
    loading: false
  };

  validate = text => {
    if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      this.setState({email: text, error: 'Email is Not Correct'});
      return false;
    } else {
      return true;
    }
  };

  onSubmission = async () => {
    console.log('chalra ye');

    let response = await fetch(
      'https://travelog-adonis.herokuapp.com/api/v1/user/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          contact_no: this.state.contact,
        }),
      },
    );

    const User = await response.json();
    console.log(User, response.status, '-------------Signup Scnz -----------------');
    if (parseInt(response.status) === 722) {
      console.log(User.message);
      alert(User.message);
    } else if (parseInt(response.status) === 201) {
      console.log(User.message);
      this.props.navigation.navigate('Login');
      this.setState({ loading: false})
    } else if (parseInt(response.status) === 400) {
      alert("Something Went Wrong");
      
    } 
  };

  // gmailSignup = async () => {
  //   console.log('gmail wala chala do');

  //   let response = await fetch('http://192.168.100.46:5000/auth/google', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const User = await response.json();
  //   console.log(
  //     response.status,
  //     '-------------Gmailll Signup Scnz -----------------',
  //   );
  //   if (parseInt(response.status) === 200) {
  //     console.log(User.message, User);
  //     alert(User.message);
  //     this.props.navigation.navigate('RootStack');
  //   } else {
  //     alert('Something went wrong');
  //   }
  // };

  render() {
    
    return (
     
        <Container >
          {/* <ImageBackground source={pic} style={{width: '100%', height: '100%'}}> */}
        
          
            <Image
              source={log}
              style={{
                height: '20%',
                width: '65%',
                marginTop:'10%',
                alignSelf: 'center',
              }}></Image>
            <Content
              style={{
                //backgroundColor:'rgba(230, 226, 216,0.5)',
                marginTop: '1%',
                borderWidth:1,
                borderColor:'#d7e9f5',
                marginLeft: '5%',
                marginRight: '5%',
                borderRadius: 20,
                marginBottom:'6%'
                
              }}>
              <Text style={styles.Title}> User Name</Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({name: text});
                  }}
                  // placeholder="Lionel Messi "
                  // placeholderTextColor="#eddedd"
                  //style={{color: 'white', fontSize:15, marginBottom:'-2.5%'}}
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor, fontSize:15}}
                />
              </Item>
              

              <Text style={styles.Title}> User Email </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({email: text});
                    // this.validate(text);
                  }}
                  // placeholder="travel@log.com"
                  // placeholderTextColor="white"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor, fontSize:15}}
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
                  // placeholder="* * * * * "
                  // placeholderTextColor="white"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor, fontSize:15}}
                />
              </Item>

              

              {/* <Text style={styles.Title}> Confirm Password </Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({confirmPassword: text});
                  }}
                  secureTextEntry={true}
                  // placeholder="* * * * * "
                  // placeholderTextColor="white"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor, fontSize:15}}
                />
              </Item> */}

              <Text style={styles.Title}> Contact No</Text>
              <Item style={{width: '80%', alignSelf: 'center'}}>
                <Input
                  onChangeText={text => {
                    this.setState({contact: text});
                  }}
                  // placeholder="03139099324 "
                  // placeholderTextColor="white"
                  placeholderTextColor="#ebeced"
                  style={{color: ThemeColor, borderBottomWidth:2,borderColor:ThemeColor, fontSize:15}}
                />
              </Item>

              
            </Content>
<Button
                // onPress={() => {
                //   this.validate(this.state.email);
                //   this.props.navigation.push('RootStack');
                // }}

                onPress={() => {
                  this.validate(this.state.email);

                  if (this.state.error === '') {
                    
                      this.setState({loading:true})
                      this.setState({error: ''});
                      this.onSubmission();
                    
                  }
                }}
                rounded
                style={{
                  justifyContent: 'center',
                  // marginTop: '0%',
                  backgroundColor: ThemeColor,
                  marginBottom: '1%',
                  width: '35%',
                  alignSelf: 'center',
                  marginBottom:'5%',
                  
                }}>
                <Text
                  style={{color: 'white', fontSize: 17, fontWeight: 'bold',marginTop:'15%'}}>
                  Signup
                </Text>
                {this.state.loading ? <WaveIndicator style={{paddingLeft:"20%"}} color="white"  /> : null}
              </Button>
       
          {/* </ImageBackground> */}
        </Container>
  
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    marginLeft: '10%',
    fontSize: 18,
    color: ThemeColor,
    marginBottom: '-5%',
    fontWeight: 'bold',
    marginTop:'5%'
  },

});
