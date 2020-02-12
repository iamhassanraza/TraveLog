import React, { Component } from 'react'
import { Text, View , ImageBackground} from 'react-native'
import {Button} from 'native-base';
import {ThemeColor} from '../assets/Colors/Colors'
import pic from '../assets/images/a5.jpg';

export default class Selection extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>

                <Text style={{color:"white",alignSelf:"center", fontSize:50,marginTop:"33%"}}> LOGO </Text>

                <View style={{marginTop:"30%"}}>
                <Button rounded style={{justifyContent:"center", marginTop:'7%',backgroundColor:"white", marginBottom:"2%",width:"70%",alignSelf:"center"}}>
            <Text style={{color:ThemeColor,fontSize:17,fontWeight:"bold"}}>SIGN UP</Text>
          </Button>

          <Button rounded style={{justifyContent:"center", marginTop:'7%',backgroundColor:ThemeColor, marginBottom:"2%",width:"70%",alignSelf:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>SIGN IN</Text>
          </Button>
                </View>


                </ImageBackground>
                
            </View>
        )
    }
}
