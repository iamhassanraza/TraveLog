import React from 'react'
import { View, Text } from 'react-native'

const FlatListContainer = (props) => {
    return (
        <View style={{borderWidth:4}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Popular Tours</Text>
        <Text>View all</Text>
        </View>
        {props.children}
        </View>
    )
}

export default FlatListContainer
