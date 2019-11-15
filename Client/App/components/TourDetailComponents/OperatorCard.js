import React, { Component } from 'react'
import { Text, View,Linking } from 'react-native'

import IconWithText from '../IconWithText'
import OperatorIcon from '../OperatorIcon'
import image from '../../assets/images/4.jpg';


import {ThemeColor  , BorderColor} from './../../assets/Colors/Colors'

export default class OperatorCard extends Component {
    render() {
        return (
                <View style={{borderWidth:0.5,marginTop:10,paddingBottom:10,paddingTop:10,backgroundColor:'white',borderColor:BorderColor}}>
                <Text style={{paddingLeft:10,fontSize:15,marginBottom:10}}> This Tour is operated by:</Text>
                <OperatorIcon
                  name="Nomad's Adventure"
                  avatar={image}
                  rating={4}
                  verified={true}
                  style={{margin: 10}}></OperatorIcon>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <IconWithText
                    onPress={() => Linking.openURL(`tel:${'03002344567'}`)}
                    icon="phone"
                    title="Call"
                    textstyle={{marginLeft: 3}}
                    style={{
                      borderWidth: 0.5,
                      padding: 5,
                      borderRadius: 10,
                      borderColor: ThemeColor
                    }}></IconWithText>
              
                  <IconWithText
                    onPress={() => Linking.openURL('mailto:touroperator@gmail.com')}
                    icon="email"
                    title="Mail"
                    textstyle={{marginLeft: 3}}
                    style={{
                      borderWidth: 0.5,
                      padding: 5,
                      borderRadius: 10,
                      borderColor: ThemeColor,
                    }}></IconWithText>
              
                  <IconWithText
                    onPress={() =>
                      Linking.openURL(
                        `https://maps.apple.com/?q=${'Orangi Town'}&ll=${'24.950083'},${'66.992844'}`,
                      )
                    }
                    icon="map-marker"
                    title="Locate"
                    textstyle={{marginLeft: 3}}
                    style={{
                      borderWidth: 0.5,
                      padding: 5,
                      borderRadius: 10,
                      borderColor: ThemeColor
                    }}></IconWithText>
                </View>
                </View>
              
              
        )
    }
}
