import React, { Component } from 'react'
import { Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import OperatorProfile from '../screens/OperatorProfile'
import OperatorTours from '../components/OperatorTours'
import AttractionDetails from '../screens/AttractionDetails'
import DestinationDetails from '../screens/DestinationDetails';
import FiltersListing from '../screens/FiltersListing'
import TourDetail from '../screens/TourDetail'
import Modal from '../screens/Modal'
import Filters from '../screens/Filters'
import SearchAndFilter from '../screens/SearchAndFilter'
import { ThemeColor, ThemeGrey, BackgroundColor } from '../assets/Colors/Colors';


const HomeStack = createStackNavigator({
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
    Filters,
    OperatorTours,
    AttractionDetails,
    SearchAndFilter,
    FiltersListing
  },
  {
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

  export default HomeStack;