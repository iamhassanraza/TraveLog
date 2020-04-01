import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import pic from '../assets/images/authloading.jpg'

export default class Authloading extends Component {
    render() {
        return (
            <View style={{backgroundColor:"white", flex:1}}>
                <Image
              source={pic}
              style={{
                height: '50%',
                width: '95%',
               marginTop:"40%"
              }}></Image>
            </View>
        )
    }
}
