import React from 'react';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Image, Button, Icon, Right } from 'native-base';
import {View, Text, ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import image from '../assets/images/3.jpg';
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
import LoadingIndicator from '../components/LoadingIndicator';



class OperatorCard extends React.Component{

    state = {
        cardData: null
    }

    componentDidMount() {
        fetch(`http://192.168.100.15:3001/operators/card/${this.props.operatorId}`)
        .then(res => {
            return res.json()
        })
        .then(resJson => {
            console.log(resJson)
            this.setState({
                cardData: resJson
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <>  
                <View style={[styles.Container, this.props.style]}>
                    {this.state.cardData? <View style={{paddingBottom: '2%'}}>
                        <ImageBackground source={require(`../assets/images/5.jpg`)} style={{height: 100}}>

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
                            name={this.state.cardData[0].name} 
                            rating={this.state.cardData[0].numeric_rating} 
                            verified={this.state.cardData[0].is_verified}
                        />
                        <View style={{marginLeft: '5%', marginTop: '1%'}}>
                            <IconWithText name='phone' text={this.state.cardData[0].phone} iconstyle={{}} textstyle={{marginLeft: '2%', marginRight: '2%'}}></IconWithText>
                            <IconWithText name='email' text={this.state.cardData[0].email} iconstyle={{}} textstyle={{marginLeft: '2%', marginRight: '2%'}}></IconWithText>
                            <IconWithText name='map-marker' text={this.state.cardData[0].street_address} iconstyle={{}} textstyle={{marginLeft: '2%', marginRight: '2%'}}></IconWithText>
                        </View> 
                    </View> : <LoadingIndicator></LoadingIndicator> }
                </View>
            </>
        );
    }
}

export default OperatorCard;

const styles = StyleSheet.create({
    Container: {
        borderColor: '#8b8e8f',
        borderWidth: 0.5,  
        width: Dimensions.get("window").width/1.4 ,
        borderBottomEndRadius:5,
        borderBottomLeftRadius:5 ,
        backgroundColor:'white',
        paddingBottom: '5%'

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

//operator card from home
// style={{marginRight:10}}
//                                 name={item.name}
//                                 verified={item.verified}
//                                 rating={item.rating}
//                                 phone={item.phone}
//                                 email={item.email}
//                                 address={item.address}
//                                 followStatus={item.followStatus}