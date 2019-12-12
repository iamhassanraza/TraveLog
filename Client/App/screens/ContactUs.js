import React, { Component } from 'react'
import { Text, View,ScrollView,ImageBackground,Dimensions,ActivityIndicator } from 'react-native'
import map from '../assets/images/map.jpg';

import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import IconWithText from '../components/IconWithText';

export default class ContactUs extends Component {
    render() {
        return (
            <ScrollView>
                
                <View>
                <ImageBackground
                     source={map}
                     style={{
                        height: Dimensions.get('window').height / 3.7,
                        width: Dimensions.get('window').width / 1,
                            }}>
                </ImageBackground>
                </View>

                <View style={{alignItems:"center", marginTop:7}}>
                    <IconWithText title={"Email"} icon={"email"} subtitle={" : salimehdi144@gmai.com"} linear={true}>
                    </IconWithText>

                    <IconWithText title={"Email"} icon={"email"} subtitle={" : salimehdi144@gmai.com"} linear={true}>
                    </IconWithText>

                    <IconWithText title={"Email"} icon={"email"} subtitle={" : salimehdi144@gmai.com"} linear={true}>
                    </IconWithText>
                </View>

                <View>

                </View>
            </ScrollView>
        )
    }
}
