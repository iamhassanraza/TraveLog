import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList } from 'react-native'

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
                name: "PJP Travel and Tours",
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
         
                
                <View>

                <FlatListContainer style={{marginLeft:10}} title="Popular Tours">
                    <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}} title='Trip to Kashmirrrr' 
                    price={item.price} 
                    daysLeft={item.daysLeft} 
                    speciality={item.speciality} 
                    seatsLeft={item.seatsLeft} 
                    startDate={item.startDate}
                    endDate={item.endDate}
                    operator={{name:'Greenland Travel and tours',image,rating:3.4,verified:true}}></TourCard>}
                    keyExtractor={item => item.OperatorCard.name}
                    />

                 </FlatListContainer>
                    <FlatListContainer title="Tour Operators">
                        <FlatList 
                            horizontal
                            data={operatorData}
                            renderItem={({item}) => 
                            <OperatorCard 
                                name={item.name}
                                verified={item.verified}
                                rating={item.rating}
                                phone={item.phone}
                                email={item.email}
                                address={item.address}
                                followStatus={item.followStatus}
                                keyExtractor={item => item.name}
                            />
                            }
                        />
                    </FlatListContainer>
                    <FlatListContainer>   
                        <FlatList
                            horizontal
                            data={DATA}
                            renderItem={({ item }) => <TourCard title='Trip to Kashmirrrr' 
                            price={item.price} 
                            daysLeft={item.daysLeft} 
                            speciality={item.speciality} 
                            seatsLeft={item.seatsLeft} 
                            startDate={item.startDate}
                            endDate={item.endDate}
                            operator={{name:'Greenland Travel and tours',image,rating:3.4,verified:true}}></TourCard>}
                            keyExtractor={item => item.name}
                        />

                    </FlatListContainer>


                
             </View>

           
         

        )
    }
}



