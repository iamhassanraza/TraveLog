import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import DestinationDetails from './App/screens/DestinationDetails';
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
import Contact from './App/screens/Contact'
import FAQ from './App/screens/FAQ'
import MAP from './App/screens/MAP'
import Webview from "./App/screens/webview"


const RootStack = createStackNavigator({
  MainTab: ScreenNavigation,
  Filters: Filters,
  Contact : Contact
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
  Selection: {
    screen: Selection
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
  initialRouteName:'Selection',
  headerLayoutPreset: 'center',
  defaultNavigationOptions:{
    header: null
  }
}

)



const AppContianer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
<AppContianer></AppContianer>
    )
  }
}


