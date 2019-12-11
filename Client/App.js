import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
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
import { ThemeColor, ThemeGrey } from './App/assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    header: (
    <View style={{backgroundColor: 'black', height: 40,alignItems:'center',justifyContent:'space-between', flexDirection: 'row'}}>
      <View style={{}}>
        <Text style={{alignSelf:'center', fontSize:22,fontWeight:'bold', color: "white"}}>
          TRAVELOG
        </Text>
      </View>
      <View style={{marginLeft:'5%'}}>
        <Icon style={{color:'white',borderColor:'white'}} size={25} name="search"></Icon>
      </View>
    </View>
    )
  }
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


