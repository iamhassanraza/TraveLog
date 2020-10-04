import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import { Rating, AirbnbRating } from 'react-native-elements';
import  { BorderColor } from '../assets/Colors/Colors';


var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

export default class Review extends Component {
    state= {
        date : this.props.time
    }
    
    render(){
        var time = new Date(this.props.time.replace(' ', 'T'));
        
    console.log(time,"STATE")
    
        return (
            <View style={styles.Container}>

                <View style={styles.avatarName}>
                    <Image style={styles.avatar} source = {{uri : 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-stock-vector-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors.jpg?ver=6'}}></Image>
                    <View style={{flex: 1, padding: '1%'}}>
                        <Text style={{fontWeight: 'bold'}}>{this.props.reviewer} </Text>
                        <Text style={{fontSize: 12, color: 'grey'}}>{months[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear()}</Text>
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
        paddingLeft: '4%',
        paddingRight: '1%',
        paddingTop: '3%'
    },
    avatarName: {
        flexDirection: 'row'
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: '1%',
        borderWidth: 0.5,
        borderColor: 'grey'
    }
})