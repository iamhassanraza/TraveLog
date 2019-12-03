import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList,Dimensions, ImageBackground,RefreshControl,TouchableWithoutFeedback} from 'react-native'

import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import image from "../assets/images/1.jpg"
import FlatListContainer from '../components/FlatListContainer'
import OperatorProfile from './OperatorProfile'
import image2 from "../assets/images/2.jpg"
import ContentLoader, { Facebook } from 'react-content-loader/native'




export default class Home extends Component {


    state = {
        tourids:undefined,
        operatorids: undefined,
        destinationids: undefined,
        refreshing: false
    } 


    componentDidMount(){
        fetch("http://192.168.100.25:3001/tours/filter?")
            .then(response => {
                return response.json()})
            .then((responseJson)=> {
              this.setState({
                refreshing: false,
               tourids : responseJson,
              })
            }).catch(err=>console.log(err))

        fetch("http://192.168.100.15:3001/operators/filter?")
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
            console.log(responseJson)
            this.setState({
                refreshing: false,
                operatorids : responseJson,
            })
        })
        .catch(err=>console.log(err))

        fetch("http://192.168.100.13:3001/destination/filter?")
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
            console.log(responseJson)
            this.setState({
                refreshing: false,
                destinationids : responseJson,
            })
        })
        .catch(err=>console.log(err))
    }


    // fetchData = ()=>{
    //     console.log('fetching')
    //     return fetch("http://192.168.100.25:3001/tours/filter?")
    //         .then(response => {
    //             return response.json()})
    //         .then((responseJson)=> {
    //           this.setState({
    //             refreshing: false,
    //            tourids : responseJson,
    //           })
    //         }).catch(err=>console.log(err))
        
    // }

    onPageRefresh = ()=>{
        this.setState({tourids:[]})
        this.fetchData()
    }

    render() {
    
        const operators = [1,6,2]
        const tours = [1,2]
        const destination = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        const apiUrl= `http://192.168.100.13:3001/destination/card/`
        

        return ( <ScrollView style={{backgroundColor:'#F0F0F0'}}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onPageRefresh} />
                    }
        
        >
                    
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
                        {
                            this.state.tourids ? 
                            <FlatList
                                horizontal
                                data={this.state.tourids}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <TourCard style={{marginRight:10}}
                                id={item.tour_id}
                                seatsLeft={10} ></TourCard>}
                                keyExtractor={item => item}
                            /> : 
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'60%'}}>
                                    <Facebook />
                                </View>
                                <View style={{width:'60%', marginLeft: '10%'}}>
                                    <Facebook />
                                </View>
                            </View>
                        }
                    </FlatListContainer>
                 
                    <FlatListContainer style={{marginLeft: '3%'}} title="Tour Operators">
                        {
                            this.state.operatorids ? 
                            <FlatList 
                                horizontal
                                data={this.state.operatorids}
                                keyExtractor={item => item}
                                showsHorizontalScrollIndicator={false}
                                renderItem= {({item}) => 
                                <OperatorCard
                                    operatorId = {item.operator_id}
                                    style={{marginRight:10}}
                                />
                                }
                            /> : 
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'60%'}}>
                                    <Facebook />
                                </View>
                                <View style={{width:'60%', marginLeft: '10%'}}>
                                    <Facebook />
                                </View>
                            </View>
                        }
                    </FlatListContainer>

                <FlatListContainer  style={{marginLeft: '3%'}} title="Top Attractions">
                        <FlatList
                            horizontal
                            data={this.state.destinationids}
                            keyExtractor={item => item}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                            <DestinationCard 
                            id={item.destination_id}
                            api = {apiUrl}
                            // destination = {1}
                             />
                            }
                        />
                </FlatListContainer>
                </View>
             </ScrollView>

           
         

        )
    }
}



