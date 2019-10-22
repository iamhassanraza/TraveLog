import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, ScrollView, Dimensions, Button } from 'react-native'
import image from '../assets/images/4.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';


export default class DestinationDetails extends Component {
    render() {
        return (
            
            <ScrollView>

            <ImageBackground source={image} 
                 style={{ 
                          height:Dimensions.get('window').height/1.5,
                          width:Dimensions.get('window').width/1}}>
              
            <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.3)", justifyContent:"flex-end", alignItems:"center"}}>   
                
                    <Text style={{fontSize:34, 
                        color: "white", 
                        fontWeight:"bold", 
                        }}> Hazara Town 
                    </Text>

                    <Button title="Recommended Seasons" color={ThemeColor}></Button>
   
            </View>  
            
          
            </ImageBackground>

            </ScrollView>

           

           
        )
    }
}



