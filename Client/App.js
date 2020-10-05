import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import DestinationDetails from './App/screens/DestinationDetails';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';

import ScreenNavigation from './App/screens/ScreenNavigation'
import { ThemeColor, ThemeGrey, BackgroundColor } from './App/assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Filters from './App/screens/Filters'
import Login from './App/screens/Login'
import Selection from './App/screens/Selection'
import ForgotPassword from './App/screens/ForgotPassword'
import RecoveryCode from './App/screens/RecoveryCode'
import NewPassword from './App/screens/NewPassword'
import SignUp from './App/screens/SignUp'
import UserProfile from './App/screens/UserProfile'
import Notifications from './App/screens/Notifications'
import EditProfile from './App/screens/EditProfile'
import Settings from './App/screens/Settings'
import AllTours from './App/screens/AllTours'

import FAQS from './App/screens/FAQS'
import MAP from './App/screens/MAP'
import Webview from "./App/screens/webview"
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoading from './App/screens/AuthLoading'
import TermsConditions from './App/screens/TermsConditions'
import Feedback from './App/screens/Feedback'



const RootStack = createStackNavigator({
  MainTab: ScreenNavigation,
  Filters: {
    screen: Filters,
    navigationOptions: {
      header: null,
    },
  },
  FAQS:{
    screen: FAQS,
    navigationOptions: {
      header: null,
    }
  }, 
  TermsConditions: {
    screen: TermsConditions,
    navigationOptions: {
      header: null,
    },
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      header: null,
    },
  }
},
{
  defaultNavigationOptions: props => {
    return {
    header: (
      <View style={{ height:60, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{marginLeft:'5%'}}>
          <Text style={{fontSize:25,fontWeight:'bold', color: ThemeColor}}>TraveLog</Text>
        </View>
        <TouchableOpacity>
        <View style={{width:35, height:35,justifyContent:'center', marginRight:'4%',backgroundColor:BackgroundColor, borderRadius:50,elevation:5}}>
          <Icon onPress={()=> props.navigation.navigate('Filters')} name="search" size={22} color={ThemeColor} style={{alignSelf:'center'}}></Icon>
        </View>
        </TouchableOpacity>
      </View>
    )
    }
  },
})

const AuthNavigator = createStackNavigator({

  Login: {
    screen: Login
  },
  
  Webview: {
    screen: Webview
  },

  ForgotPassword: {
    screen: ForgotPassword
  },
  ResetPassword: {
    screen: NewPassword
  },
  RecoveryCode:{
    screen: RecoveryCode
  },
  SignUp: {
    screen: SignUp
  },
  RootStack
},

{
  initialRouteName:'Login',
  headerLayoutPreset: 'center',
  defaultNavigationOptions:{
    header: null
  }
}

)





 const SwitchNav = createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: RootStack,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )



const AppContianer = createAppContainer(SwitchNav);


export default class App extends Component {
  render() {
    return (
<AppContianer></AppContianer>
    )
  }
}


