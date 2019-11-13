import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import TourDetail from './TourDetail'
import Destination from './DestinationDetails'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DestinationDetails from './DestinationDetails';
import Home from './Home'
import AboutOperator from '../components/AboutOperator'
import OperatorRating from '../components/OperatorRating'
import Gallery from '../components/Gallery'
import Album from '../components/Album'
import { ThemeColor } from '../assets/Colors/Colors';
const TabNavigator = createMaterialTopTabNavigator(
    {
    
        About:AboutOperator,
        Reviews:OperatorRating,

        Gallery:Gallery
    },
    {
        initialRouteName: "Gallery",
        tabBarOptions: {
            labelStyle: {
                fontSize: 14,
            },
            tabStyle: {
                width: 90,
            },
            style: {
                backgroundColor: 'white',
                elevation: 1,

            },
            upperCaseLabel: false,
            scrollEnabled: true,
            activeTintColor: ThemeColor,
            inactiveTintColor: 'black',
            indicatorStyle: {
                backgroundColor: ThemeColor,
                height:3
            }
        }
    });


export default createAppContainer(TabNavigator);