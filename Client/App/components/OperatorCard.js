import React from 'react';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Image, Button, Icon, Right } from 'native-base';
import {View, Linking, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import  { ThemeColor, ThemeGrey } from '../assets/Colors/Colors';
import { VerifiedIcon } from "../assets/icons/Icons";
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddressIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconWithText from './IconAndText';
import { Rating } from 'react-native-ratings';
import { withNavigation } from 'react-navigation'
import LoadingIndicator from '../components/LoadingIndicator';

const userId = 1

class OperatorCard extends React.Component{

    state = {
        cardData: null
    }

    componentDidMount() {
        fetch(`http://192.168.100.15:3001/operators/card/${this.props.operatorId}/${userId}`)
        .then(res => {
            return res.json()
        })
        .then(resJson => {
            this.setState({
                cardData: resJson
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <TouchableWithoutFeedback 
                onPress={()=>this.props.navigation.push('OperatorProfile', {
                    operatorData : {...this.state.cardData}, operatorId: this.props.operatorId
                })}>  
                <View style={[styles.Container, this.props.style]}>
                    {this.state.cardData? <View style={{paddingBottom: '2%'}}>
                        <View style={{borderWidth: this.state.cardData[0].cover? 0 : 1, borderColor: this.state.cardData[0].cover? 'white' : '#b3b5b4'}}>
                            <ImageBackground
                                source={{uri: this.state.cardData[0].cover?`http://192.168.100.15:3001/images/${this.state.cardData[0].cover}`:'http://192.168.100.15:3001/images/default.png'}}
                                style={{height: 100}}>
                            </ImageBackground>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginLeft: '5%', height: 80, width: '40%', marginTop: -30}}>
                                <Image
                                    source={{uri: this.state.cardData[0].dp ? `http://192.168.100.15:3001/images/${this.state.cardData[0].dp}` : 'http://192.168.100.15:3001/images/default.png'}} 
                                    style={{height: 80, width: 80,borderColor: '#b3b5b4', borderWidth: 2, borderRadius: 50}}>
                                </Image>
                            </View>
                            <View style={{height: 50, width: '55%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={styles.FollowButton}>
                                    <FollowIcon name="user-follow" color='white'/>
                                    <Text style={{color: 'white'}}>
                                        {this.state.cardData[1] ? "Unfollow" : "Follow"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center', marginLeft: '5%'}}>
                            <View style={{flex:4, marginLeft:'1%'}}>
                                <Text style={{fontWeight:'bold',fontSize:16} }>
                                    {this.state.cardData[0].name}
                                    {this.state.cardData[0].is_verified ? <VerifiedIcon size={17}></VerifiedIcon> : "" }
                                </Text> 
                                <View style={{flexDirection:'row',alignItems:'center'}}>   
                                    <Text style={{color:'orange', fontWeight:'bold'}}>{this.state.cardData[0].numeric_rating}</Text>
                                    <Rating
                                        readonly={true}
                                        ratingBackgroundColor='red'
                                        ratingCount={5}
                                        startingValue={this.state.cardData[0].numeric_rating? this.state.cardData[0].numeric_rating : 0}
                                        imageSize={15}
                                        style={{alignItems:'flex-start'}}
                                    /> 
                                </View>                      
                            </View>
                        </View>
                        <View style={{marginLeft: '5%', marginTop: '1%'}}>
                            <IconWithText 
                                name='phone' 
                                text={this.state.cardData[0].phone} 
                                iconstyle={{}} 
                                textstyle={{marginLeft: '2%', marginRight: '2%'}}                            
                            />    
                            <IconWithText 
                                name='email' 
                                text={this.state.cardData[0].email} 
                                iconstyle={{}} 
                                textstyle={{marginLeft: '2%', marginRight: '2%'}}
                            />
                            <IconWithText 
                                name='map-marker' 
                                text={this.state.cardData[0].street_address} 
                                iconstyle={{}} 
                                textstyle={{marginLeft: '2%', marginRight: '2%'}}
                            />
                        </View> 
                    </View> : <View style={{height: 200, justifyContent: 'center'}}><LoadingIndicator></LoadingIndicator></View> }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default withNavigation(OperatorCard);

const styles = StyleSheet.create({
    Container: {
        borderColor: '#8b8e8f',
        borderWidth: 0.5,  
        width: Dimensions.get("window").width/1.5 ,
        borderBottomEndRadius:5,
        borderBottomLeftRadius:5 ,
        backgroundColor:'white',
        paddingBottom: '5%'

    },
    ImageContainer:{
    
        //height:120,  
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
        borderColor: 'blue'
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

//operator card from home
// style={{marginRight:10}}
//                                 name={item.name}
//                                 verified={item.verified}
//                                 rating={item.rating}
//                                 phone={item.phone}
//                                 email={item.email}
//                                 address={item.address}
//                                 followStatus={item.followStatus}