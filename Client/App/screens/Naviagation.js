import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DestinationDetails from './DestinationDetails';
import Home from './Home'
import AboutOperator from '../components/AboutOperator'
import OperatorRating from '../components/OperatorRating'
import Gallery from '../components/Gallery'
import Album from '../components/Album'
import { ThemeColor } from '../assets/Colors/Colors';
import TourCard from '../components/TourCard';

const TabNavigator = createMaterialTopTabNavigator(
    {
        About: { screen: AboutOperator},
        Tours: { screen: TourCard},
        Gallery: { screen: Gallery},
        Reviews: { screen: OperatorRating}
    },
    {
        initialRouteName: "About",
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