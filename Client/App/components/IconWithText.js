import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  { ThemeColor } from '../assets/Colors/Colors';
const IconWithText = (props) => {
    return (
        <View style={{borderWidth:1,borderColor:'red',flexDirection:'row',width:'100%'}}>
            <View style={{borderWidth:1,flex:3,justifyContent:'center',alignItems:'center'}}>
            <Icon style={{color: ThemeColor,fontSize: 16,...props.iconstyle}} name={props.name} />
            </View>
            <View style={{borderWidth:1,flex:10,justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#5c5353',...props.textstyle}}>{props.text}</Text>
            
            </View>
        </View>
    )
}

export default IconWithText
