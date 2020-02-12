import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {Container, Header, Content, Item, Input,Button} from 'native-base';
import pic from '../assets/images/a4.jpg';
import {ThemeColor} from '../assets/Colors/Colors'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import gmail from '../assets/images/gm.png'
import fb from '../assets/images/fb.png'
import Icon from 'react-native-vector-icons/Ionicons';
import log from '../assets/images/logo.png';

export default class Login extends Component {
  render() {
    return (
  
     <ScrollView>
         
         <Container style={{backgroundColor:'black'}}>
        
        <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
        <TouchableOpacity>
         <Icon name="ios-arrow-back" style={{color:"white", marginTop:"5%", marginLeft:"4%", fontSize:30, fontWeight:"bold"}}></Icon>
         </TouchableOpacity>
         <Image
              source={log}
              style={{
                height: '20%',
                width: '35%',
                alignSelf: 'center',
                marginTop: '2%',
              }}></Image>
          <Content style={{paddingTop:"5%", marginTop:"5%",paddingBottom:"30%",marginLeft:'5%',marginRight:"5%",borderRadius:20}}>
          <Text style={{marginLeft:"10%", fontSize:17,color:ThemeColor,fontWeight:"bold"}}> Username </Text>
            <Item style={{width:"80%", alignSelf:"center"}}>
              <Input placeholder="travel@log.com" placeholderTextColor="white" style={{color: 'white'}} />
            </Item>

            <Text style={{marginLeft:"10%", fontSize:17,color:ThemeColor, marginTop:'5%',fontWeight:"bold"}}> Password </Text>
            <Item style={{width:"80%", alignSelf:"center"}}>
              <Input placeholder="* * * * * " placeholderTextColor="white" style={{color: 'white'}} />
            </Item>

            <Button rounded style={{justifyContent:"center", marginTop:'7%',backgroundColor:ThemeColor, marginBottom:"2%",width:"40%",alignSelf:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Login</Text>
          </Button>
          </Content>
         <Content>
         <TouchableOpacity>
         <Text style={{alignSelf:"center", fontSize:15, color:"white"}}>Forgot Password ?</Text>
         </TouchableOpacity>
         {/* <Text style={{alignSelf:"center", fontSize:18, color:"white"}}>OR</Text> */}

          
                <View style={{justifyContent:"space-around", flexDirection:"row"}}>
                <Button rounded style={{justifyContent:"center", marginTop:'4%',backgroundColor:"white", width:"35%",alignSelf:"center"}}>
                <Image source={fb} style={{height:20,width:20}}></Image>
            <Text style={{color:"#3b5998", fontWeight:"bold", paddingLeft:"4%"}}>Facebook</Text>
          </Button>
          <Button rounded style={{justifyContent:"center", marginTop:'4%',backgroundColor:"white", width:"35%",alignSelf:"center"}}>
            <Image source={gmail} style={{height:20,width:20}}></Image>
            <Text style={{color:"red",fontWeight:"bold", paddingLeft:"4%"}}>Google</Text>
          </Button>
                </View>
           
         </Content>
          </ImageBackground>
        
      </Container>
     </ScrollView>
  
 
    );
  }
}
