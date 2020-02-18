import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  { ThemeColor } from '../assets/Colors/Colors';


const IconAndText = props => {

    return (
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <View style={{flex: 2, alignItems: 'center'}}>
                        <Icon style={{color: ThemeColor,fontSize: 16}} name={props.name} />
                    </View> 
                    <View style={{flex: 12}}>
                        <Text style={{fontSize:12, color:'#5c5353',...props.textstyle}}>{props.text}</Text>
                    </View>
                </View>          
    );

};

export default IconAndText;