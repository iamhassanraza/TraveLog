import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import PhotoGrid from 'react-native-thumbnail-grid'
import image from '../assets/images/4.jpg';

export default class Gallery extends Component {
    render() {

        const images = [
            'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
            'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
            '../assets/images/4.jpg'
        ]

        return (
            <View style={{alignSelf: 'center'}}>
                <PhotoGrid imageStyle={{borderWidth: 2 ,borderColor: 'black'}} width={Dimensions.get("window").width/1.5}  source={images} onPressImage = {uri => showImage(uri)}/>
            </View>
        )
    }
}
