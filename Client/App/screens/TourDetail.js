import React, { Component } from 'react'
import { Text, View,ScrollView ,Dimensions} from 'react-native'
import HeaderImage from "../components/HeaderImage"
import image from "../assets/images/2.jpg"

export default class TourDetail extends Component {
    render() {

        const { width , height } = Dimensions.get('window')
        return (
            <ScrollView>
                <HeaderImage image={image} style={{height:height/3}}></HeaderImage>



            </ScrollView>
        )
    }
}
