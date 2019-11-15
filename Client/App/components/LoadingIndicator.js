import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class LoadingIndicator extends Component {
    render() {
        return (
          <ActivityIndicator size="large" color="#00ff00" />
        )
    }
}