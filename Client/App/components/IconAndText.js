import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  { ThemeColor } from '../assets/Colors/Colors';


const IconWithText = props => {

    return(
        <View style={{flexDirection: "row", alignItems: 'center'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Icon style={{color: ThemeColor,fontSize: 18,...props.iconstyle}} name={props.name} />
            </View> 
            <View style={{flex: 12, marginLeft: '2%'}}>
                <Text style={{...props.textstyle}}>{props.text}</Text>
            </View>
        </View> 
    );

};

export default IconWithText;