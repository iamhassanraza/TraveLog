import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import { Rating, AirbnbRating } from 'react-native-elements';
import  { BorderColor } from '../assets/Colors/Colors';




export default class Review extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.avatarName}>
                    <Image style={styles.avatar} source = {logo}></Image>
                    <View style={{flex: 1, padding: '1%'}}>
                        <Text style={{}}><Text style={{fontWeight: 'bold'}}>{this.props.reviewer} </Text>reviews {"Nomads Adventure society greenland travel"}</Text>
                        <Text style={{fontSize: 12, color: 'grey'}}>{"12th September at 2:52 PM"}</Text>
                        <Rating 
                            type = 'custom'
                            readonly = {true}
                            showRating = {false}
                            imageSize = {15}
                            fractions = {1}
                            startingValue = {this.props.rating}
                            style = {{alignSelf: 'flex-start', marginTop: '3%'}}
                        />
                        <Text style={{}}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>  
            </View>
        )
    }
}

const styles = StyleSheet. create({
    Container: {
        backgroundColor: 'white',
        borderTopWidth: 0.4,
        borderColor: BorderColor,
        paddingBottom: '3%',
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '3%'
    },
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