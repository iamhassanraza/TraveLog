import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Review from '../components/Review';
import {ThemeColor, BackgroundColor, ThemeGrey} from '../assets/Colors/Colors'
import IconAndText from '../components/IconAndText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import AboutOperator from '../components/AboutOperator';
import IconWithText from '../components/IconWithText';
import Home from './Home';
import OperatorProfile from './OperatorProfile';
import FiltersListing from '../screens/FiltersListing'
import Notifications from './Notifications'
import UserProfile from './UserProfile';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Home",
                tabBarPosition: 'bottom'
            }
        },
        followups: {
            screen: FiltersListing,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                        <Icon2 name="bookmark" color={tintColor} style={{fontSize:22}}/>
                ),
                tabBarLabel: 'Follow ups',
                tabBarPosition: 'bottom'
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
                tabBarPosition: 'bottom'
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
                tabBarPosition: 'bottom'
            }
        },
        Settings: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="settings" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Settings",
                tabBarPosition: 'bottom'
            }
        }      
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'top',
        header: null,
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