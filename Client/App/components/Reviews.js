import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import image from "../assets/images/3.jpg"

// By Ali Mehdi

export default class Reviews extends Component {
    render() {
        return (

        <View style={{flexDirection:"row", ...this.props.style }}>
            
            <View style={{paddingTop:"1%"}}>
                <View style={{borderWidth:1, borderRadius:50, justifyContent:"flex-start"}}>
                     <Image source={image} style={{height:35, width:35, borderRadius:50}}></Image>
                </View>
            </View>

            <View style={{ flex:1 , paddingLeft:"2%"}}>
                <View>
                    <Text style={{fontSize:20}}>Syed Ali Mehdi Rizvi</Text>
                    <Text style={{color:"grey"}}>30/10/2019</Text>
                </View>

                <View style={{ borderTopColor:"grey"}}>
                    <Text>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed to your positive, negative or just so-so experience. You might also offer your view on what the company is doing well, and how they can improve. But keep things friendly and courteous!</Text>
                </View>
            </View>

        </View>
       
        )
    }
}