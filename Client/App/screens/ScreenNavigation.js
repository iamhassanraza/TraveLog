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

const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Home"
            }
        },
        followups: {
            screen: IconWithText,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon2 name="bookmark" color={tintColor} style={{fontSize:22}}/>
                ),
                tabBarLabel: 'Follow ups'
            }
        },
        Notifications: {
            screen: IconAndText,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon2 name="bell-ring"color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Notifications"
            }
        },   
        Profile: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="person" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Profile"
            }
        },
        Settings: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="settings" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Settings"
            }
        }      
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'top',
        swipeEnabled: false,
        tabBarOptions: {
            style: {
                backgroundColor: "white",
                height: 50,
            },
            iconStyle: {
                marginTop: -7,
            },
            labelStyle: {
                fontSize: 8,
                width:'100%',
                alignSelf:'center',
                marginTop: -2,
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