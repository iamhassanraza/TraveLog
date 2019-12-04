import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import PhotoGrid from 'react-native-thumbnail-grid'
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import img1 from '../assets/images/6.jpg'
import img2 from '../assets/images/7.jpg'
import img3 from '../assets/images/4.jpg'
import { ThemeColor,ThemeGrey } from '../assets/Colors/Colors'
import Album from './Album'


export default class Gallery extends Component {

    // openAlbum = () => {
    //     return (
    //         <Album />
    //     )
    // }


    render() {

        const images = [
            img1,img2,img3
        ]

        return (
            <ScrollView style={{alignSelf: 'center', marginTop: '2%'}}>
                <FlatGrid
                    itemDimension={Dimensions.get('window').width/3}
                    spacing={10}
                    items={images}
                    renderItem={({ item }) => (
                    <View  onPress={this.openAlbum} style={{}}>
                        <ImageBackground source={item} style={styles.image}></ImageBackground>
                        <Text style={styles.text}>{"Hunza album"}</Text>                      
                    </View>)}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 170
    },
    text: {
    }
})
