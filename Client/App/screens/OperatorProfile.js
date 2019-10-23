import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import coverPhoto from '../assets/images/6.jpg'


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
        width: Dimensions.get("window").width/1
    },
    coverPhoto: {
        height: 200,
    }
})
