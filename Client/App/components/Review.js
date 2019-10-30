import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import { Rating, AirbnbRating } from 'react-native-elements';



export default class Review extends Component {
    render() {
        return (
            <View style={{}}>
                <View style={styles.avatarName}>
                    <Image style={styles.avatar} source = {logo}></Image>
                    <View style={{flex:1, padding: '1%'}}>
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
                            So, as you can see, by default Apple Maps is already working. More than that, if you linked everything correctly and enabled the user location, it’s actually done a lot of things for us (the user permission for the location with a default message). If you came from native iOS development, then you probably know what is an info.plist file.
                        </Text>
                    </View>
                </View>
                <View style={{marginTop: '1%', paddingLeft: '1%'}}>
                    {/* <Rating 
                        type = 'custom'
                        readonly = {true}
                        showRating = {false}
                        imageSize = {15}
                        fractions = {1}
                        startingValue = {4}
                        style = {{alignSelf: 'flex-start'}}
                    /> */}
                </View>
                <View style={styles.text}>
                    {/* <Text>
                        So, as you can see, by default Apple Maps is already working. More than that, if you linked everything correctly and enabled the user location, it’s actually done a lot of things for us (the user permission for the location with a default message). If you came from native iOS development, then you probably know what is an info.plist file.
                    </Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet. create({
    avatarName: {
        borderWidth: 0,
        flexDirection: 'row',
        //alignItems: 'center',
        flex: 1
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