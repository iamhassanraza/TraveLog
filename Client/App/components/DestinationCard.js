import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button , Image,Dimensions, TouchableWithoutFeedback} from 'react-native';
import image from "../assets/images/2.jpg";
import Icon from 'react-native-vector-icons/FontAwesome';
import  { ThemeColor } from '../assets/Colors/Colors';


// Props : destinationImage, destinationName
class DestinationCard extends React.Component{

    state = {
        saved:false
    } 
    render() {
        return (
           
            <View style={{
                        height:Dimensions.get('window').height/2.8,
                        width:Dimensions.get('window').width/2.6,
                        margin:5,
                        
                       
            }}>
                <View style={{flex:7}}>
                    <Image
                     source={this.props.destinationImage}
                     style={{width:"100%",
                            height:"99%" ,
                            borderTopLeftRadius:6, 
                            borderTopRightRadius:6,
                            borderBottomLeftRadius:6,
                            borderBottomRightRadius:6
                            }}>
                    </Image>
                </View>


                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:8}}>
                        <Text style={{
                            // textShadowColor: "grey",
                            // textShadowOffset: {width: 1, height: 1},
                            // textShadowRadius: 3,
                            fontSize:16
                        }}>{this.props.destinationName} </Text>
                        </View>
                        <View style={{flex:2}}>
                        {/* <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} style={{fontSize:24}} color={ThemeColor} /> */}
                        
                        <TouchableWithoutFeedback onPress={()=>{
                             this.setState((prevState) => ({
                                    saved: !prevState.saved
                                    }));
                        }}>

                             <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                                size={30} 
                                color={ThemeColor}/>
                    
                        </TouchableWithoutFeedback>
                    </View>
                    

                    </View>
                </View>

                
            </View>
        );
    }
}

export default DestinationCard;