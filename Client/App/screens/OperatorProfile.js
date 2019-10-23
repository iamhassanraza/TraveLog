import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import coverPhoto from '../assets/images/5.jpg'


export default class OperatorProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ImageBackground source={coverPhoto} style={styles.coverPhoto}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width/1.5
    },
    coverPhoto: {
        height: Dimensions.get("window").height/2,
    }
})
