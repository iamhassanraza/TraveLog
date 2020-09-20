import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';
import pic from '../assets/images/a4.jpg';
import {ThemeColor} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png';
import fb from '../assets/images/fb.png';
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/jpeg.jpg';
import AsyncStorage from '@react-native-community/async-storage';
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

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error:'',
    loading: false
  };



  signIn = async () => {
    const res = await fetch('https://travelog-adonis.herokuapp.com/api/v1/user/signin',{
      method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    console.log(res,"res");
    const responsejson =  await res.json();
    console.log(responsejson,"response in json");

    //Storing data in AsycStorage
    if(res.status === 200){
      await AsyncStorage.setItem('User', JSON.stringify(responsejson));
      this.props.navigation.navigate('App');
      this.setState({ loading: false});
    }
    else if(res.status === 400 ){
      console.log("FAIL")
      alert(responsejson.message);
    }
  } 


  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text, error:'Email is Not Correct'
    })
    return false;
      }
    else {
      this.setState({email:text, error:''})
      console.log("Email is Correct");
      return true;
    }
    }


  render() {

    console.log(this.state);
    return (
    
      <ScrollView>
         
        <Container style={{flex:1}}>
        <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
            {/* <TouchableOpacity>
              <Icon
              onPress={() => this.props.navigation.push('Selection')}
                name="ios-arrow-back"
                style={{
                  color: 'white',
                  marginTop: '5%',
                  marginLeft: '4%',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}></Icon>
            </TouchableOpacity> */}
            <Image
              source={log}
              style={{
                height: '20%',
                width: '45%',
                alignSelf: 'center',
                borderRadius:20,
                marginTop:'10%'
              }}></Image>
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
                  fontSize: 17,
                  color: "white",
                  fontWeight: 'bold',
                }}>
                {' '}
                Username{' '}
              </Text>
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


              <Text
                style={{
                  marginLeft: '10%',
                  fontSize: 17,
                  color: "white",
                  marginTop: '5%',
                  fontWeight: 'bold',
                }}>
                {' '}
                Password{' '}
              </Text>
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

              <Button
                onPress={()=>{
                  if(this.validate(this.state.email)){
                    this.setState({loading:true})
                    this.signIn();
                  }
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
                  Login
                </Text>
                {this.state.loading ? <WaveIndicator style={{paddingLeft:"20%"}} color="white"  /> : null}
              </Button>
            </Content>
            <Content>
              <TouchableOpacity
              onPress={() => this.props.navigation.push('ForgotPassword')}>
                <Text
                  style={{alignSelf: 'center', fontSize: 16, color: 'white'}}>
                  Forgot Password ?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => this.props.navigation.push('SignUp')}>
                <Text
                  style={{alignSelf: 'center', fontSize: 16, color: 'white',marginTop:'2%'}}>
                  Don't have an account ?
                </Text>
              </TouchableOpacity>
              {/* <Text style={{alignSelf:"center", fontSize:18, color:"white"}}>OR</Text> */}

              {/* <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                <Button
                onPress={()=> alert("Work in Progress")}
                  rounded
                  style={{
                    justifyContent: 'center',
                    marginTop: '4%',
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
                  onPress={()=> alert("Work in Progress")}
                  rounded
                  style={{
                    justifyContent: 'center',
                    marginTop: '4%',
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
              </View> */}
            </Content>
            </ImageBackground>
        </Container>
 
      </ScrollView>
   
    );
  }
}
