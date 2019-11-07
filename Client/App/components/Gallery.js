import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import PhotoGrid from 'react-native-thumbnail-grid'
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import img1 from '../assets/images/6.jpg'
import img2 from '../assets/images/7.jpg'
import img3 from '../assets/images/4.jpg'
import { ThemeColor,ThemeGrey } from '../assets/Colors/Colors'


export default class Gallery extends Component {
    render() {

        const images = [
            img1,img2,img3,img2,img1,img3,img2,img1
        ]

        return (
            <View style={{alignSelf: 'center', marginTop: '2%'}}>
                <FlatGrid
                    itemDimension={Dimensions.get('window').width/3}
                    spacing={10}
                    items={images}
                    renderItem={({ item }) => (
                    <View style={{}}>
                        <ImageBackground source={item} style={styles.image}></ImageBackground>
                        <Text style={styles.text}>{"Hunza album"}</Text>                      
                    </View>)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 160
    },
    text: {
    }
})
