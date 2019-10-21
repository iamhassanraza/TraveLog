import React from 'react'
import { View, Text } from 'react-native'

const FlatListContainer = (props) => {
    return (
        <View style={{borderWidth:1}}>
        {props.children}
        </View>
    )
}

export default FlatListContainer
