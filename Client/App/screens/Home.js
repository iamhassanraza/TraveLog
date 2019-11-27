import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList,Dimensions, ImageBackground,TouchableHighlight,TouchableWithoutFeedback} from 'react-native'

import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import image from "../assets/images/1.jpg"
import FlatListContainer from '../components/FlatListContainer'
import OperatorProfile from './OperatorProfile'
import image2 from "../assets/images/2.jpg"


export default class Home extends Component {


    state = {
        data:[]
    } 


    // componentDidMount(){
    //     fetch("http://192.168.100.25:3001/tours")
    //         .then(response => {
    //             return response.json()})
    //         .then((responseJson)=> {
    //           this.setState({
    //            data : responseJson
    //           })
    //         }).catch(err=>console.log(err))
    // }


    render() {
    
        const operators = [1,6,2]
        const tours = [1,2]
        const destination = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        

        return ( <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                    
                    <View style={{height:300}}>
                        <ImageBackground source={image2} style={{width:'100%',height:300}}>
                            <View style={{backgroundColor:'rgba(0,0,0,0.4)',flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignSelf:'center',width:'80%'}}>
                            Amazing tours and holidays around the world.
                            </Text>
                            <Text style={{color:'#D3EFEE',alignSelf:'center',width:'80%'}}>
                            Find great experiences, trips, and activities at fantastic prices around the globe.
                            </Text>
                            </View>

                        </ImageBackground>


                    </View>
                

                    <View style={{flexDirection:'column',justifyContent:'space-around',borderWidth:1}}>

                <FlatListContainer style={{marginLeft:'3%'}} title="Popular Tours">
                    <FlatList
                    horizontal
                    data={tours}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}}
                    id={item}
                    seatsLeft={10} ></TourCard>}
                    keyExtractor={item => item}
                    />
                </FlatListContainer>
                
                <FlatListContainer style={{marginLeft: '3%'}} title="Tour Operators">
                        <FlatList 
                            horizontal
                            data={operators}
                            keyExtractor={item => item.name}
                            showsHorizontalScrollIndicator={false}
                            renderItem= {({item}) => 
                            <OperatorCard
                                operatorId = {item}
                                style={{marginRight:10}}
                            />
                            }
                        />
                </FlatListContainer>

                <FlatListContainer  style={{marginLeft: '3%'}} title="Top Attractions">
                        <FlatList
                            horizontal
                            data={destination}
                            keyExtractor={item => item}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                            <DestinationCard 
                            id={item} />
                            }
                        />
                </FlatListContainer>
                </View>
             </ScrollView>

           
         

        )
    }
}



