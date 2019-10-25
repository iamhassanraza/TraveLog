import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, ScrollView, Dimensions, Button,TouchableWithoutFeedback,  FlatList } from 'react-native'
import image from '../assets/images/4.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';
import TextCutter from '../components/TextCutter';
import DestinationCard from "../components/DestinationCard";
import TourCard from "../components/TourCard";
import IconWithText from '../components/IconWithText';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatListContainer from '../components/FlatListContainer';

export default class DestinationDetails extends Component {

    render() {

        const overview = "The six-month tourist  season at Fairy Meadows starts in April and continues until the end of September. Tourists lodge at the camping site spread over 800 hectares (2,000 acres), known as .[2] The site of Fairy Meadows, though partially developed, generates about PKR 17 million revenue from tourism, mainly by providing food, transportation and accommodation services.[9] A project by Shangrila Resorts, the pioneers of tourism development in Gilgit Baltistan, will establish an eco-friendly resort. The road to Fairy Meadows was built by Brigadier M. Aslam Khan (M.C, H.J, F.K), First Commander Gilgit Scouts, which today employs the locals. The local community stopped the extraction of timber to conserve the forest and promote tourism in the area. The main attraction of this place other than the meadows itself is the view of Nanga Parbat Mountain. Tourists usually hike to the base camp of the mountain from Fairy Meadows The six-month tourist season at Fairy Meadows starts in April and continues until the end of September. Tourists lodge at the camping site spread over 800 hectares (2,000 acres), known as .[2] The site of Fairy Meadows, though partially developed, generates about PKR 17 million revenue from tourism, mainly by providing food, transportation and accommodation services.[9] A project by Shangrila Resorts, the pioneers of tourism development in Gilgit Baltistan, will establish an eco-friendly resort. The road to Fairy Meadows was built by Brigadier M. Aslam Khan (M.C, H.J, F.K), First Commander Gilgit Scouts, which today employs the locals. The local community stopped the extraction of timber to conserve the forest and promote tourism in the area. The main attraction of this place other than the meadows itself is the view of Nanga Parbat Mountain. Tourists usually hike to the base camp of the mountain from Fairy Meadows";
        
        const DATA = [
            {
                price:300,
                title:'Hunza',
                daysLeft:2,
                speciality:'Girls',
                seatsLeft:10,
                startDate:'9 oct',
                endDate:'20 oct',
                OperatorCard:{name:"Nomad's Adventure",image,rating:3.4,verified:true}
            },
            {
             price:300,
             daysLeft:2,
             title:'Kashmir',
             speciality:'Girls',
             seatsLeft:10,
             startDate:'9 oct',
             endDate:'20 oct',
             OperatorCard:{name:'Greenland  tours',image,rating:3.4,verified:true}
         },
         {
             price:300,
             daysLeft:2,
             speciality:'Girls',
             seatsLeft:10,
             title:'China Border',
             startDate:'9 oct',
             endDate:'20 oct',
             OperatorCard:{name:'Greenland Travel ',image,rating:3.4,verified:true}
         },
         {
             price:300,
             daysLeft:2,
             speciality:'Girls',
             seatsLeft:10,
             title:'Turkey',
             startDate:'9 oct',
             endDate:'20 oct',
             OperatorCard:{name:'Greenland and tours',image,rating:3.4,verified:true}
         },
         {
             price:300,
             daysLeft:2,
             speciality:'Girls',
             seatsLeft:10,
             title:'Skardu',
             startDate:'9 oct',
             endDate:'20 oct',
             OperatorCard:{name:'GreenTravel and tours',image,rating:3.4,verified:true}
         },
           ];
        
        
return (
            
    <ScrollView>

    <ImageBackground source={image}  style={{height:Dimensions.get('window').height/1.8, width:Dimensions.get('window').width/1}}>
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


            <View style={{flexDirection:"row",justifyContent:"space-around", padding:10, borderBottomWidth:0.5, borderBottomColor:ThemeColor}} >
                                              
                    <IconWithText title={"Wishlist"} icon='heart-outline' style={{borderWidth:1, padding:3,borderColor:ThemeColor}}>
                    </IconWithText>

                    <IconWithText title={"VISITED"} icon='clipboard-check-outline' style={{borderWidth:1, padding:3,borderColor:ThemeColor}} >
                    </IconWithText>

                    <IconWithText title={"RATE"} icon='star-outline' style={{borderWidth:1, padding:3, borderColor:ThemeColor}} >
                    </IconWithText>
                    
            </View>


              

                <View>
                
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
                    <TextCutter style={{marginLeft:"2%", marginRight:"2%", textAlign:"justify", fontSize:13}} limit={650} text={overview}>     
                    </TextCutter>
                </View>
                </View>



                <FlatListContainer  style={{marginLeft: '2%'}} title="Nearby Attractions">
                        <FlatList
                            horizontal
                            data={DATA}
                            keyExtractor={item => item.OperatorCard.name}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                            <DestinationCard destinationName={item.OperatorCard.name} destinationImage={image}   />
                            }
                        />
                </FlatListContainer>


                <View>
                <Text style={{fontSize:24,alignSelf:"center"}}> Location </Text>
                <TouchableWithoutFeedback>
                <ImageBackground source={image} style={{ 
                          height:Dimensions.get('window').height/3.5,
                          width:Dimensions.get('window').width/1}}>
                </ImageBackground>
                </TouchableWithoutFeedback>
                </View>


                <FlatListContainer style={{marginLeft:'3%'}} title="Popular Tours">
                    <FlatList
                    horizontal
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}} title={item.title}
                    price={item.price} 
                    daysLeft={item.daysLeft} 
                    speciality={item.speciality} 
                    seatsLeft={item.seatsLeft} 
                    startDate={item.startDate}
                    endDate={item.endDate}
                    operator={{name:item.OperatorCard.name,image,rating:3.4,verified:true}}></TourCard>}
                    keyExtractor={item => item.OperatorCard.name}
                    />
                </FlatListContainer>

            </ScrollView>
         
        )
    }
}



