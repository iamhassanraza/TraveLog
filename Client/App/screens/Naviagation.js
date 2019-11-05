import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import TourDetail from './TourDetail'
import Destination from './DestinationDetails'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DestinationDetails from './DestinationDetails';
import Home from './Home'
import Test from './Test'
const TabNavigator = createMaterialTopTabNavigator(
    {
    
        Tab1:Test,
        Tab12:Test,
        Tab13:Test,
        Tab14:Test,
        Tab15:Test,
        
      

    },
    {
        swipeEnabled:true,
        tabBarOptions: {
            labelStyle: {
                fontSize: 14,
                textTransform: 'capitalize',
                fontWeight: 'bold'
            },
            tabStyle: {
                width: 120,
            },
            style: {
                backgroundColor: 'white',
                elevation: 2,
                borderTopColor:'rgba(0,0,0,0.05)',
                borderTopWidth:2,
                paddingBottom:0

            },
            upperCaseLabel: false,
            scrollEnabled: true,
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            indicatorStyle: {
                backgroundColor: 'black',
                height:3
            }

        }
    });


export default createAppContainer(TabNavigator);