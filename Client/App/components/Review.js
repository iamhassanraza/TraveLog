import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import { Rating, AirbnbRating } from 'react-native-elements';
import  { BorderColor } from '../assets/Colors/Colors';




export default class Review extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white',padding: '1%', borderTopWidth: 1, borderColor: BorderColor}}>
                <View style={styles.avatarName}>
                    <Image style={styles.avatar} source = {logo}></Image>
                    <View style={{flex: 1, padding: '1%'}}>
                        <Text style={{}}><Text style={{fontWeight: 'bold'}}>Mohammad Faraz </Text>reviews {"Nomads Adventure society greenland travel"}</Text>
                        <Text style={{fontSize: 12, color: 'grey'}}>{"12th September at 2:52 PM"}</Text>
                        <Rating 
                            type = 'custom'
                            readonly = {true}
                            showRating = {false}
                            imageSize = {15}
                            fractions = {1}
                            startingValue = {4}
                            style = {{alignSelf: 'flex-start', marginTop: '3%'}}
                        />
                        <Text style={{}}>
                            So, as you can see, by default Apple Maps is already working. then you probably know what is an info.plist file.
                        </Text>
                    </View>
                </View>  
            </View>
        )
    }
}

const styles = StyleSheet. create({
    avatarName: {
        flexDirection: 'row'
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 50,
        margin: '1%',
        borderWidth: 0.5,
        borderColor: 'grey'
    }
})