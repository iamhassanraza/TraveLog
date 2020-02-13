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
import { ThemeColor, ThemeGrey, BackgroundColor } from './App/assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FiltersListing from './App/screens/FiltersListing'
import Login from './App/screens/Login'
import Selection from './App/screens/Selection'
import ForgotPassword from './App/screens/ForgotPassword'
import RecoveryCode from './App/screens/RecoveryCode'
import NewPassword from './App/screens/NewPassword'

const RootStack = createStackNavigator({
  Home,
  OperatorProfile: {
    screen: OperatorProfile,
    navigationOptions: {
      header: null
    }
  },
  TourDetail,
  DestinationDetails,
  Modal,
  ContactUs,
  Filters,
  ScreenNavigation,
  AttractionDetails,
  SearchAndFilter,
  FiltersListing,
  Login
  
},
{
  initialRouteName:'ScreenNavigation',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    header: (
      <View style={{height:50, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{marginLeft:'5%'}}>
          <Text style={{fontSize:25,fontWeight:'bold', color: ThemeColor}}>TraveLog</Text>
        </View>
        <View style={{width:25, height:25,justifyContent:'center', marginRight:'4%',backgroundColor:BackgroundColor, borderRadius:50}}>
          <Icon name="search" size={20} color={ThemeColor} style={{alignSelf:'center'}}></Icon>
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
<Login></Login>
    )
  }
}


