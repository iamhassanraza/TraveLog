import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList,Dimensions } from 'react-native'

import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import { VerifiedIcon } from '../assets/icons/Icons'
import image from "../assets/images/1.jpg"
import OperatorIcon from "../components/OperatorIcon"
import FlatListContainer from '../components/FlatListContainer'

export default class Home extends Component {
    render() {

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
               daysLeft:2,
               speciality:'Girls',
               seatsLeft:10,
               startDate:'9 oct',
               endDate:'20 oct',
               OperatorCard:{name:'Travel and tours',image,rating:3.4,verified:true}
           },
           {
            price:300,
            daysLeft:2,
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
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenland Travel ',image,rating:3.4,verified:true}
        },
        {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenlan and tours',image,rating:3.4,verified:true}
        },
        {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'GreenTravel and tours',image,rating:3.4,verified:true}
        },
          ];


        return (
         
                
                <ScrollView>
                    <View style={{flexDirection:'column',justifyContent:'space-around',borderWidth:1}}>

                <FlatListContainer style={{marginLeft:'3%'}} title="Popular Tours">
                    <FlatList
                    horizontal
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}} title='Trip to Kashmirrrr' 
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



