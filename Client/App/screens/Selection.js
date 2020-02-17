import React, { Component } from 'react'
import { Text, View , ImageBackground,Image} from 'react-native'
import {Button} from 'native-base';
import {ThemeColor} from '../assets/Colors/Colors'
import pic from '../assets/images/a5.jpg';
import log from '../assets/images/logo.png'


export default class Selection extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>

                <Image source={log} style={{height:"25%",width:"45%", alignSelf:"center", marginTop:"25%"}}></Image>
                <View style={{marginTop:"30%"}}>
                <Button onPress={() => this.props.navigation.push('SignUp')} rounded style={{justifyContent:"center", marginTop:'7%',backgroundColor:"white", marginBottom:"2%",width:"70%",alignSelf:"center"}}>
            <Text style={{color:ThemeColor,fontSize:17,fontWeight:"bold"}}>SIGN UP</Text>
          </Button>

          <Button onPress={() => this.props.navigation.push('Login')} rounded style={{justifyContent:"center", marginTop:'7%',backgroundColor:ThemeColor, marginBottom:"2%",width:"70%",alignSelf:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>SIGN IN</Text>
          </Button>
                </View>


                </ImageBackground>
                
            </View>
        )
    }
}
