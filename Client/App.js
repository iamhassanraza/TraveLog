import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import DestinationDetails from './App/screens/DestinationDetails';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenNavigation from './App/screens/ScreenNavigation'
import { ThemeColor, ThemeGrey, BackgroundColor } from './App/assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FiltersListing from './App/screens/FiltersListing'
import Login from './App/screens/Login'
import Selection from './App/screens/Selection'
import ForgotPassword from './App/screens/ForgotPassword'
import RecoveryCode from './App/screens/RecoveryCode'
import NewPassword from './App/screens/NewPassword'
import SignUp from './App/screens/SignUp'
import UserProfile from './App/screens/UserProfile'
import Notifications from './App/screens/Notifications'
import EditProfile from './App/screens/EditProfile'

const RootStack = createStackNavigator({
  MainTab: ScreenNavigation
},
{
  defaultNavigationOptions: {
    header: (
      <View style={{ height:60, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{marginLeft:'5%'}}>
          <Text style={{fontSize:25,fontWeight:'bold', color: ThemeColor}}>TraveLog</Text>
        </View>
        <View style={{width:25, height:25,justifyContent:'center', marginRight:'4%',backgroundColor:BackgroundColor, borderRadius:50}}>
          <Icon name="search" size={20} color={ThemeColor} style={{alignSelf:'center'}}></Icon>
        </View>
      </View>
    )
  },
})

const AuthNavigator = createStackNavigator({

  Login: {
    screen: Login
  },
  Selection: {
    screen: Selection
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
  initialRouteName:'RootStack',
  headerLayoutPreset: 'center',
  defaultNavigationOptions:{
    header: null
  }
}

)



const AppContianer = createAppContainer(AuthNavigator);


export default class App extends Component {
  render() {
    return (
<AppContianer></AppContianer>
    )
  }
}


