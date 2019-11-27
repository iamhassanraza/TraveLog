import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking, TouchableOpacity as T } from 'react-native'
import IconWithText from './IconAndText'
import  { ThemeColor, ThemeGrey } from '../assets/Colors/Colors'


export default class AboutOperator extends Component {
    render() {
        return (
            <>    
                <View style={{marginTop: '5%'}}>
                    <IconWithText 
                        textstyle={styles.textstyle} 
                        iconstyle={styles.iconstyle} 
                        name="map-marker" 
                        text={this.props.screenProps.address}
                        onPress = {() => Linking.openURL('geo:' + 40.7127753 + ',' + -74.0059728)}/>
                    <IconWithText 
                        textstyle={styles.textstyle} 
                        iconstyle={styles.iconstyle} 
                        name="phone" 
                        text={this.props.screenProps.phone}
                        onPress = {() => Linking.openURL('tel:${03002344567}')}/>
                    <IconWithText 
                        textstyle={styles.textstyle} 
                        iconstyle={styles.iconstyle} 
                        name="email" 
                        text={this.props.screenProps.email}
                        onPress = {() => Linking.openURL('mailto:m.h.raxa1@gmail.com')}/>
                </View>
                <View>
                    <Text style={styles.heading}>Description</Text>
                    <Text style={styles.about}>Developing an organized presentation starts with your introduction. The introduction opens your speech. I am also very delighted by your intro.
                    Developing an organized presentation starts with your introduction. The introduction opens your speech. I am also very delighted by your intro.
                    Developing an organized presentation starts with your introduction. The introduction opens your speech. I am also very delighted by your intro.
                    </Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    textstyle : {
        paddingRight: '2%',
        color: ThemeGrey,
        fontSize: 16
    },
    iconstyle: {
        color: ThemeColor
    },
    iconText: {
        borderWidth: 1,
        flex: 1
    },
    heading: {
        color: ThemeColor,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: '4%',
        paddingLeft: '1%'
    },
    about: {
        marginLeft: '1%',
        marginRight: '1%'
    }
})
