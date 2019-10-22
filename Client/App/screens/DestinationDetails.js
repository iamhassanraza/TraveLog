import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, ScrollView } from 'react-native'
import image from '../assets/images/1.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';

export default class DestinationDetails extends Component {
    render() {
        return (
            
            <ScrollView style={{flex:1}}>

            <ImageBackground source={image} style={{width:'100%', height:"100%"}}>

            <View>
              <Text> textInComponent </Text>
            </View>


            </ImageBackground>
            </ScrollView>

           
        )
    }
}



