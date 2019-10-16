import React, { Component } from 'react'
import { Text, View } from 'react-native'



import TourCard from '../components/TourCard'

export default class Home extends Component {
    render() {
        return (
            <View style={{padding:20}}>
              <TourCard></TourCard>
            </View>
        )
    }
}
