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

const TabNavigator = createMaterialTopTabNavigator(
    {
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
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor}  style={{fontSize:22}}/>
                ),
                tabBarLabel: "Home"
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
        }      
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            style: {
                backgroundColor: BackgroundColor,
                height: 50,
            },
            // tabStyle: {
            //     width: 40
            // },
            iconStyle: {
                marginTop: -7,
            },
            labelStyle: {
                fontSize: 10,
                marginTop: -2
            },
            indicatorStyle: {
                height:0
            },
            upperCaseLabel: false,
            inactiveTintColor: 'black',
            activeTintColor: ThemeColor,
            showIcon: true
            }
        }
);

export default createAppContainer(TabNavigator);