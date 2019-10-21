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

        const DATA = [
           {
               price:300,
               daysLeft:2,
               speciality:'Girls',
               seatsLeft:10,
               startDate:'9 oct',
               endDate:'20 oct',
               OperatorCard:{name:'Greenland Travel and tours',image,rating:3.4,verified:true}
           },
           {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenland Travel and tours',image,rating:3.4,verified:true}
        },
        {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenland Travel and tours',image,rating:3.4,verified:true}
        },
        {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenland Travel and tours',image,rating:3.4,verified:true}
        },
        {
            price:300,
            daysLeft:2,
            speciality:'Girls',
            seatsLeft:10,
            startDate:'9 oct',
            endDate:'20 oct',
            OperatorCard:{name:'Greenland Travel and tours',image,rating:3.4,verified:true}
        },
          ];


        return (
         
            <View>
                    
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



