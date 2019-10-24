import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, ScrollView, Dimensions, Button,TouchableWithoutFeedback } from 'react-native'
import image from '../assets/images/4.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DestinationDetails extends Component {
    render() {
        return (
            
            <ScrollView>

            <ImageBackground source={image} 
                 style={{ 
                          height:Dimensions.get('window').height/1.8,
                          width:Dimensions.get('window').width/1}}>
              
            <View style={{flex:1,backgroundColor:"rgba(0,0,0.3)", justifyContent:"flex-end", alignItems:"center"}}>   
                
                    <Text style={{fontSize:32, 
                        color: "white", 
                        fontWeight:"bold",
                        
                        }}> {'Fairy Meadows'.toUpperCase()} </Text>

                    <View style={{backgroundColor:"white",
                                backgroundColor:"rgba(255,255,255,0.5)", 
                                borderRadius:2, 
                                flexDirection:"row",
                                justifyContent:"center",
                                alignItems:"center", paddingBottom:"1%"}}>

                        <Text> <Icon name="image-album" style={{fontSize:17, color:"white"}}/></Text> 
                        <Text style={{fontSize:17,color:"white"}}> Album </Text>
                    </View>
   
            </View>  
            
          
            </ImageBackground>

            <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:"2%", paddingBottom:"2%", borderBottomWidth:0.7, borderTopWidth: 0.7, paddingTop:"2%"}} >
                        
                    <TouchableWithoutFeedback onPress={()=>alert('navigate to tour details')}>
                    <View>
                    <View style={{flex:1,borderWidth:1, flexDirection:"row", alignItems:"center"}} >
                       <Icon name="heart-outline" style={{fontSize:19}}/>
                       <Text style={{fontSize:20}}> WISHLIST </Text>
                    </View> 
                    </View>
                    </TouchableWithoutFeedback> 
                        
                    <TouchableWithoutFeedback  onPress={()=>alert('navigate to tour details')}>
                    <View>
                    <View style={{borderWidth:1,flex:1,flexDirection:"row", alignItems:"center"}}>
                        <Icon name="clipboard-check-outline" style={{fontSize:19}}/>
                        <Text style={{fontSize:20}}> VISITED </Text>
                    </View>
                    </View>
                    </TouchableWithoutFeedback> 

                    <TouchableWithoutFeedback  onPress={()=>alert('navigate to tour details')}>
                    <View>
                    <View style={{flex:1,borderWidth:1,flexDirection:"row", alignItems:"center"}} >
                        <Icon name="star-outline" style={{fontSize:20}}/>
                        <Text style={{fontSize:20}}> RATE </Text>
                    </View>
                    </View>  
                    </TouchableWithoutFeedback>  
                    
            </View>


                <View style={{borderBottomColor:ThemeColor, borderBottomWidth:0.5}}>
                    <Text style={{fontSize:24,alignSelf:"center"}}> About </Text>
                </View>

                <View style={{flexDirection:"row", paddingTop:"1.5%",alignItems:"center", marginLeft:"1.5%"}}>
                    <Icon name="calendar-month-outline" style={{fontSize:20, color:ThemeColor}}/>
                    <Text style={{fontSize:18, color: ThemeColor, fontWeight:"bold"}}> Best Time To Visit : </Text>
                    <Text style={{fontSize:17}}> June , July </Text>
                </View>
                <View style={{flexDirection:"row", paddingTop:"1.5%",alignItems:"center", marginLeft:"1.5%"}}>
                    <Icon name="map-marker-radius" style={{fontSize:20, color:ThemeColor}}/>
                    <Text style={{fontSize:18, color: ThemeColor, fontWeight:"bold"}}> City : </Text>
                    <Text style={{fontSize:17}}> Gilgit </Text>
                </View>

                <View>
                <Text>
                The six-month tourist  season at Fairy Meadows starts in April and continues until the end of September. Tourists lodge at the camping site spread over 800 hectares (2,000 acres), known as "Raikot Serai".[2] The site of Fairy Meadows, though partially developed, generates about PKR 17 million revenue from tourism, mainly by providing food, transportation and accommodation services.[9] A project by Shangrila Resorts, the pioneers of tourism development in Gilgit Baltistan, will establish an eco-friendly resort. The road to Fairy Meadows was built by Brigadier M. Aslam Khan (M.C, H.J, F.K), First Commander Gilgit Scouts, which today employs the locals. The local community stopped the extraction of timber to conserve the forest and promote tourism in the area. The main attraction of this place other than the meadows itself is the view of Nanga Parbat Mountain. Tourists usually hike to the base camp of the mountain from Fairy Meadows The six-month tourist season at Fairy Meadows starts in April and continues until the end of September. Tourists lodge at the camping site spread over 800 hectares (2,000 acres), known as "Raikot Serai".[2] The site of Fairy Meadows, though partially developed, generates about PKR 17 million revenue from tourism, mainly by providing food, transportation and accommodation services.[9] A project by Shangrila Resorts, the pioneers of tourism development in Gilgit Baltistan, will establish an eco-friendly resort. The road to Fairy Meadows was built by Brigadier M. Aslam Khan (M.C, H.J, F.K), First Commander Gilgit Scouts, which today employs the locals. The local community stopped the extraction of timber to conserve the forest and promote tourism in the area. The main attraction of this place other than the meadows itself is the view of Nanga Parbat Mountain. Tourists usually hike to the base camp of the mountain from Fairy Meadows
                </Text>
                </View>

                <View>
                <Text style={{fontSize:24,alignSelf:"center"}}> Location </Text>
                <TouchableWithoutFeedback>
                <ImageBackground source={image} style={{ 
                          height:Dimensions.get('window').height/3.5,
                          width:Dimensions.get('window').width/1}}>
                </ImageBackground>
                </TouchableWithoutFeedback>
                </View>

                <View>
                    <Text>
                        End
                    </Text>
                </View>
            

            </ScrollView>

           

           
        )
    }
}



