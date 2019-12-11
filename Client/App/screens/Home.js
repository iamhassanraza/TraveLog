import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList,Dimensions, ImageBackground,RefreshControl,TouchableWithoutFeedback} from 'react-native'
import {BackgroundColor} from '../assets/Colors/Colors'
import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import image from "../assets/images/1.jpg"
import FlatListContainer from '../components/FlatListContainer'
import OperatorProfile from './OperatorProfile'
import image2 from "../assets/images/im5.jpg"
import ContentLoader, { Facebook } from 'react-content-loader/native'


export default class Home extends Component {


    state = {
        tourids:[],
        operatorids: [],
        destinationids: [],
        refreshing: false
    } 


    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        this.fetchTours()
        this.fetchOperators()
        this.fetchDestinations()
        console.log(this.state)
    }


    fetchTours = () => {
        fetch("https://travelog-pk.herokuapp.com/tours/filter?")
        .then(response => {
            return response.json()
        })
        .then((responseJson)=> {
            this.setState({
                refreshing: false,
                tourids : responseJson
            })
        })
        .catch(err => console.log(err))    
    }

    fetchOperators = () => {
        fetch("https://travelog-pk.herokuapp.com/operators/filter?")
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
            this.setState({
                refreshing: false,
                operatorids : responseJson,
            })
        })
        .catch(err => console.log(err))
    }

    fetchDestinations = () => {
        fetch("https://travelog-pk.herokuapp.com/destination/filter?")
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
            this.setState({
                refreshing: false,
                destinationids : responseJson,
            })
        })
        .catch(err => console.log(err))
    }

    onPageRefresh = ()=>{
        //this.setState({tourids:[]})
        this.setState({
            tourids: [],
            operatorids: [],
            destinationids: []
        })
        this.fetchData()
    }

    render() {
        const apiUrl= `https://travelog-pk.herokuapp.com/destination/card/`
        

        return ( 
                    <ScrollView 
                        style={{backgroundColor:'#F0F0F0', height: '100%'}}
                        refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onPageRefresh}/>
                    }>
                    
                    <View style={{height: Dimensions.get('window').height*0.3}}>
                        <ImageBackground source={image2} style={{width:'100%',height:"100%"}}>
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
                

                    <View style={{flexDirection:'column'}}>

                    <FlatListContainer style={{marginLeft:'3%'}} title="Popular Tours">
                        {
                            this.state.tourids[0] ? 
                            <FlatList
                                horizontal
                                data={this.state.tourids}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <TourCard style={{marginRight:10}}
                                id={item.tour_id}
                                seatsLeft={10} ></TourCard>}
                                keyExtractor={item => item.tour_id}
                            /> : 
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'60%'}}>
                                    <Facebook speed={0.5} height={150}/>
                                </View>
                                <View style={{width:'60%', marginLeft: '10%'}}>
                                    <Facebook speed={0.5} height={150}/>
                                </View>
                            </View>
                        }
                    </FlatListContainer>
                 
                    <FlatListContainer style={{marginLeft: '3%'}} title="Tour Operators">
                        {
                            this.state.operatorids[0] ? 
                            <FlatList 
                                horizontal
                                data={this.state.operatorids}
                                keyExtractor={item => item.operator_id}
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
                                    <Facebook speed={0.5} height={150}/>
                                </View>
                                <View style={{width:'60%', marginLeft: '10%'}}>
                                    <Facebook speed={0.5} height={150}/>
                                </View>
                            </View>
                        }
                    </FlatListContainer>

                <FlatListContainer  style={{marginLeft: '3%'}} title="Top Attractions">
                    {
                        this.state.destinationids[0] ?
                        <FlatList
                            horizontal
                            data={this.state.destinationids}
                            keyExtractor={item => item.destination_id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) =>
                            <DestinationCard 
                            id={item.destination_id}
                            api = {apiUrl}
                             />
                            }
                        /> :
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'60%'}}>
                                <Facebook speed={0.5} height={150}/>
                            </View>
                            <View style={{width:'60%', marginLeft: '10%'}}>
                                <Facebook speed={0.5}  height={150}/>
                            </View>
                        </View>
                    }       
                </FlatListContainer>
                </View>
             </ScrollView>

           
         

        )
    }
}



