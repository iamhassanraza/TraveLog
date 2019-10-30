import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class CustomButton extends Component {
    render() {
        return (
            <View style={styles.followButton}>
                <Icon name={this.props.name} color='white'></Icon>
                <Text style={{color: 'white'}}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    followButton: {
        height: 35,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: ThemeColor,
        alignSelf: 'center',
        borderRadius: 5
    }
})