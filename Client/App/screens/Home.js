import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList,Dimensions, ImageBackground} from 'react-native'

import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import image from "../assets/images/1.jpg"
import FlatListContainer from '../components/FlatListContainer'
import image2 from "../assets/images/5.jpg"

export default class Home extends Component {

    state = {
        data:[]
    }

    // componentDidMount(){
       
    //     fetch("http://localhost:3000/tours")
    //     .then(response => response.json())
    //     .then((responseJson)=> {
    //       this.setState({
    //        data : responseJson
    //       })
    //     })
    //     .catch(error=>console.log(error)) //to catch the errors if any
    //     }
    // }


    componentDidMount(){
        fetch("http://192.168.100.25:3000/tours")
            .then(response => response.json())
            .then((responseJson)=> {
              this.setState({
               data : responseJson
              })
            }).catch(err=>console.log(err))
    }


    render() {
            console.log(this.state.data)
        const operatorData = [
            {
                name: "PJP Travel and Tour",
                verified: true,
                rating: 5,
                phone: "0324112342",
                email: "pjp@gmail.com",
                address: "Office-304, Anum Empire, shahrah",
                followStatus: false
            },
            {
                name: "PJP Travel and Tours and advent",
                verified: true,
                rating: 5,
                phone: "0324112342",
                email: "pjp@gmail.com",
                address: "Office-304, Anum Empire, shahrah",
                followStatus: false
            },
            {
                name: "PJP and Tours",
                verified: true,
                rating: 5,
                phone: "0324112342",
                email: "pjp@gmail.com",
                address: "Office-304, Anum Empire, shahrah",
                followStatus: false
            }
        ]

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
         
                
                <ScrollView style={{backgroundColor:'#F0F0F0'}}>

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
                <FlatListContainer style={{marginLeft: '3%'}} title="Tour Operators">
                        <FlatList 
                            horizontal
                            data={operatorData}
                            keyExtractor={item => item.name}
                            showsHorizontalScrollIndicator={false}
                            renderItem= {({item}) => 
                            <OperatorCard
                                style={{marginRight:10}}
                                name={item.name}
                                verified={item.verified}
                                rating={item.rating}
                                phone={item.phone}
                                email={item.email}
                                address={item.address}
                                followStatus={item.followStatus}
                            />
                            }
                        />
                </FlatListContainer>

                <FlatListContainer  style={{marginLeft: '3%'}} title="Top Attractions">
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
                </View>
             </ScrollView>

           
         

        )
    }
}



