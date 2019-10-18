import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'



import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{}}>
              <OperatorCard></OperatorCard>
              <TourCard></TourCard>
              <OperatorCard></OperatorCard>
              <TourCard></TourCard>
            </ScrollView>
        )
    }
}
