import React, { Component } from 'react'
import { Text, View,ScrollView,ImageBackground,Dimensions } from 'react-native'
import map from '../assets/images/map.jpg';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import IconWithText from '../components/IconWithText';

export default class ContactUs extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{width:"100%", height:"17%", backgroundColor:ThemeColor,justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:22, fontWeight:"bold", alignSelf:"center"}}>Contact Us </Text>
                </View>

                <View>
                <ImageBackground
                     source={map}
                     style={{
                        height: Dimensions.get('window').height / 3.7,
                        width: Dimensions.get('window').width / 1,
                            }}>
                </ImageBackground>
                </View>

                <View>
                    <IconWithText >

                    </IconWithText>
                </View>

                <View>

                </View>
            </ScrollView>
        )
    }
}
