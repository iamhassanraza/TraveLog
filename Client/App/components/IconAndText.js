import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Content, Icon } from 'native-base';

const IconWithText = props => {

    return(
        <View style={{flexDirection: "row"}}>
            <Icon style={{marginLeft: "4%", width: 13, fontSize:30, color: "#3399FF"}} type="Ionicons" name={props.icon} /> 
            <Text style={{marginLeft: "3%"}}>{props.text} {"\n"}{props.anothertext} </Text>
        </View> 
    );

};

export default IconWithText;