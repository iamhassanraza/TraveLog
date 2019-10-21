import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button , Image,Dimensions} from 'react-native';
import image from "../assets/images/2.jpg";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  { ThemeColor } from '../assets/Colors/Colors';



class DestinationCard extends React.Component{
    render() {
        return (
           
            <View style={{
                        height:Dimensions.get('window').height/2.8,
                        width:Dimensions.get('window').width/2.6,
                        margin:5
                       
            }}>
                <View style={{flex:7}}>
                    <Image
                     source={image}
                     style={{width:"100%",
                            height:"99%" ,
                            borderTopLeftRadius:6, 
                            borderTopRightRadius:6,
                            borderBottomLeftRadius:6,
                            borderBottomRightRadius:6
                            }}>
                    </Image>
                </View>


                <View style={{flex:1}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{
                            textShadowColor: "grey",
                            textShadowOffset: {width: 1, height: 1},
                            textShadowRadius: 3,
                            fontSize:16
                        }}> {this.props.destinationName} </Text>
                        <Icon name="bookmark" style={{fontSize:24}} color={ThemeColor} />
                    </View>
                </View>


            </View>
        );
    }
}

export default DestinationCard;