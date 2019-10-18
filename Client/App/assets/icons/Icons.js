//import icons from libary ionicans and the export it from here to use throughout your app
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { View, Text } from 'react-native'
import { ThemeColor } from '../Colors/Colors'

export const VerifiedIcon = (props) => {
    return (
     
        <Icon name="check-circle" size={props.size ? props.size : 20} color={ThemeColor}  /> 
      
    )
}
