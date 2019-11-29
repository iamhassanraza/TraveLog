import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import IconWithText from './IconAndText'
import  { ThemeColor, ThemeGrey } from '../assets/Colors/Colors'


export default class AboutOperator extends Component {
    render() {
        return (
            <>    
                <View style={{marginTop: '5%', marginLeft: '3%'}}>
                    <TouchableOpacity onPress = {() => Linking.openURL('geo:' + 40.7127753 + ',' + -74.0059728)}>
                        <IconWithText 
                            textstyle={{...styles.textstyle, color: ThemeGrey}} 
                            iconstyle={styles.iconstyle} 
                            name="map-marker" 
                            text={this.props.screenProps.address}            
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Linking.openURL(`tel:${this.props.screenProps.phone}`)}>
                        <IconWithText 
                            textstyle={{...styles.textstyle, textDecorationLine: 'underline'}} 
                            iconstyle={styles.iconstyle} 
                            name="phone" 
                            text={this.props.screenProps.phone}                         
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Linking.openURL(`mailto:${this.props.screenProps.email}`)}>
                        <IconWithText 
                            textstyle={{...styles.textstyle, textDecorationLine: 'underline'}} 
                            iconstyle={styles.iconstyle} 
                            name="email" 
                            text={this.props.screenProps.email}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: '5%'}}>
                    <Text style={styles.heading}>Description</Text>
                    <Text style={styles.about}>
                        {this.props.screenProps.description}
                    </Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    textstyle : {
        paddingRight: '2%',
        color: ThemeColor,
        fontSize: 16
    },
    iconstyle: {
        color: ThemeGrey
    },
    iconText: {
        borderWidth: 1,
        flex: 1
    },
    heading: {
        color: ThemeGrey,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: '4%',
    },
    about: {
        paddingRight: '5%'
    }
})
