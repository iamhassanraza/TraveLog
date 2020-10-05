import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { StackActions, NavigationActions } from 'react-navigation';
import Review from '../components/Review';
import {ThemeColor, BackgroundColor, ThemeGrey} from '../assets/Colors/Colors'
import IconAndText from '../components/IconAndText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import AboutOperator from '../components/AboutOperator';
import IconWithText from '../components/IconWithText';
import Home from './Home';
import HomeStack from './HomeStack'
import OperatorProfile from './OperatorProfile';
import Filters from '../screens/Filters'
import Notifications from './Notifications'
import UserProfile from './UserProfile';
import FiltersListing from './FiltersListing'
import Settings from './Settings'
import SettingsStack from './SettingsStack'

const TabNavigator = createMaterialTopTabNavigator(
    {
        HomeStack: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Home",
            }
        },
        followups: {
            screen: FiltersListing,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                        <Icon2 name="bookmark" color={tintColor} style={{fontSize:22}}/>
                ),
                tabBarLabel: 'Follow ups',
                
            }
        },
        Notifications: {
            screen: Notifications,
            navigationOptions: ({navigation}) => {
                return {
                tabBarIcon: ({tintColor}) => (
                    <Icon2 name="bell-ring"color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Notifications",
            }
        }
        },   
        Profile: {
            screen: UserProfile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="person" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Profile",
                
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="settings" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Settings"
            }
        }      
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeStack',
        defaultNavigationOptions: {
            tabBarOnPress: ({navigation, defaultHandler}) => {
                navigation.dispatch(StackActions.popToTop());
                defaultHandler();
            }
        },
        swipeEnabled: false,
        tabBarOptions: {
            style: {
                backgroundColor: "white",
                height: 50,
            },
            iconStyle: {
                marginTop: 0,
            },
            labelStyle: {
                fontSize: 9,
                width:'100%',
                alignSelf:'center',
                marginTop: -5,
            },
            indicatorStyle: {
                backgroundColor: ThemeColor,
                height:2,
            },
            upperCaseLabel: false,
            inactiveTintColor: ThemeGrey,
            activeTintColor: ThemeColor,
            showIcon: true
            }
        }
);

export default createAppContainer(TabNavigator);