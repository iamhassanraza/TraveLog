import React from 'react';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Image, Button, Icon, Right } from 'native-base';
import {View, Text, ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import image from '../assets/images/2.jpg';
import logo from '../assets/images/1.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';
import VerifiedIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddressIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconWithText from './IconAndText';
import { Rating } from 'react-native-ratings';
import OperatorIcon from './OperatorIcon';




class OperatorCard extends React.Component{
    render() {
        return (
            <>  
            <View style={[styles.Container, this.props.style]}>
                <ImageBackground source={image} style={{height: 100}}>

                </ImageBackground>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: '5%', height: 80, width: '30%', marginTop: -30}}>
                        <Image source={logo} style={{height: 80, width: 80,borderColor: 'white', borderWidth: 2, borderRadius: 50}}>

                        </Image>
                    </View>
                    <View style={{height: 50, width: '65%', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.FollowButton}>
                            <FollowIcon name="user-follow" color='white'/>
                            <Text style={{color: 'white'}}>
                                {this.props.followStatus ? "Unfollow" : "Follow"}
                            </Text>
                        </View>
                    </View>
                </View>
                <OperatorIcon 
                    style={{marginLeft: '5%'}} 
                    name={this.props.name} 
                    rating={this.props.rating} 
                    verified={this.props.verified}
                />
                <View style={{marginLeft: '5%', marginTop: '1%'}}>
                    <IconWithText name='phone' text={this.props.phone} iconstyle={{}} textstyle={{}}></IconWithText>
                    <IconWithText name='email' text={this.props.email} iconstyle={{}} textstyle={{}}></IconWithText>
                    <IconWithText name='map-marker' text={this.props.address} iconstyle={{}} textstyle={{}}></IconWithText>
                </View>    
            </View>
            </>
        );
    }
}

export default OperatorCard;

const styles = StyleSheet.create({
    Container: {
        borderColor: ThemeColor,
        borderWidth: 2, 
        paddingBottom: '2%' , 
        width: Dimensions.get("window").width/1.5   
    },
    ImageContainer:{
    
        height:120,  
        flexDirection:'column',
        justifyContent:'flex-start',
        borderWidth: 1,
        borderColor: 'red'
    },
    TourCardHeading:{
        fontSize:14,
        fontWeight:'bold',
        
       
    },
    TourCardDate:{
        fontSize:12,
        color:'red'
    },
    TextConatiner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
        
    },
    FollowButton: {
        height: 25,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: ThemeColor,
        borderRadius: 5,
        borderColor: 'blue',
    },
    Logo: {
        width: 80,
        height: 80,
        marginTop: -30,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 50
    },
    LogoButton: {
        flexDirection: 'row'
    },

});
