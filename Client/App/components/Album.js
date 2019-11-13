import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PhotoGrid from 'react-native-thumbnail-grid'
//import PhotoGrid from 'react-native-image-grid';

import img1 from '../assets/images/6.jpg'
import img2 from '../assets/images/7.jpg'
import img3 from '../assets/images/4.jpg'
import Gallery from 'react-native-image-gallery'

export default class Album extends Component {

    images = [
        img2,img3,img1,img2,img3,img1,img1,img2,img1
    ]


    render() {
        return (
            <View>
                <Text>hello</Text>
                <PhotoGrid 
                    source = {this.images}
                />
            </View>
        )
    }
}
