import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DestinationDetails from './App/screens/TourDetail';

export default class App extends Component {
  render() {
    return (
      <View>
        <DestinationDetails></DestinationDetails>
      </View>
    )
  }
}
