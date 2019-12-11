import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DestinationDetails from './App/screens/DestinationDetails';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TourDetail from './App/screens/TourDetail'
import OperatorProfile from './App/screens/OperatorProfile'
import Home from './App/screens/Home'
import Modal from './App/screens/Modal'
import ContactUs from './App/screens/ContactUs'
import Filters from './App/screens/Filters'
import AttractionDetails from './App/screens/AttractionDetails'
import ScreenNavigation from './App/screens/ScreenNavigation'
import SearchAndFilter from './App/screens/SearchAndFilter'

const RootStack = createStackNavigator({
  Home,
  OperatorProfile,
  TourDetail,
  DestinationDetails,
  Modal,
  ContactUs,
  Filters,
  ScreenNavigation,
  AttractionDetails,
  SearchAndFilter
},
{
  initialRouteName:'ScreenNavigation',
  // defaultNavigationOptions: {
  //   header:null,
  // }
}
);


const AppContianer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
      <AppContianer></AppContianer>
    )
  }
}


