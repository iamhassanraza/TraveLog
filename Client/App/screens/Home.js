import React, { Component } from 'react'
import { Text, View, ScrollView,FlatList } from 'react-native'

import TourCard from '../components/TourCard'
import OperatorCard from '../components/OperatorCard'
import DestinationCard from '../components/DestinationCard'
import { VerifiedIcon } from '../assets/icons/Icons'
import image from "../assets/images/1.jpg"

export default class Home extends Component {
    render() {
        return (
            <View style={{margin:'5%'}}>
                 <TourCard title='Trip to Kashmirrrr' 
                    price={400} 
                    daysLeft={3} 
                    speciality='Only For Girls' 
                    seatsLeft={10} 
                    startDate='9,oct 2019'
                    endDate='21,oct 2019'
                    operator={{name:'Greenland Travel and tours',image,rating:3.4,verified:true}}></TourCard>
            </View>

        )
    }
}



