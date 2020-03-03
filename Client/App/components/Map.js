import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get("window").width;


export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
            <MapView
            // mapType= 'hybrid'
        style={styles.map}
        initialRegion={
        { latitude: 36.319316,
        longitude: 74.865298,
        latitudeDelta:0.0122,
        longitudeDelta: width / height * 0.0122}
        }
    
  />
       </View>
        )
    }
}



const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
        height:"12%",
        marginTop:"2%",
        width: '100%',
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 1
    },
});
