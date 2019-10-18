import React from 'react';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Image, Button, Icon, Right } from 'native-base';
import {View, Text, ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import image from '../assets/images/2.jpg';
import logo from '../assets/images/1.jpg';
import  { ThemeColor } from '../assets/Colors/Colors';
import VerifiedIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import AddressIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';



class OperatorCard extends React.Component{
    render() {
        return (
            <>  
            <View style={{borderColor: ThemeColor, alignSelf: 'center',borderWidth: 2, marginTop: 60, height: Dimensions.get("window").height/2.4, width: '80%'}}>
                <ImageBackground source={image} style={{height: 100}}>

                </ImageBackground>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: '5%', height: 80, width: '30%', marginTop: -30}}>
                        <Image source={logo} style={{height: 80, width: 80,borderColor: 'white', borderWidth: 2, borderRadius: 50}}>

                        </Image>
                    </View>
                    <View style={{height: 50, width: '65%', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.FollowButton}>
                            <Icon name="user-follow" color='white'/>
                            <Text style={{color: 'white'}}>
                                Follow
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: '5%', marginTop: '1%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Nomads Adventure Services <VerifiedIcon name="check-circle" style={{color: ThemeColor,fontSize: 16,alignSelf: 'center'}}></VerifiedIcon>     
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <PhoneIcon name="phone" style={{color: ThemeColor, fontSize: 16}}></PhoneIcon>
                        </View>
                        <View>
                            <Text style={{ marginTop: '1%', color: 'grey'}}>
                                03452087064
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View>
                            <EmailIcon name="email" style={{color: ThemeColor, fontSize: 16}}></EmailIcon>
                        </View>
                        <View>
                            <Text style={{marginTop: '1%', color: 'grey'}}>
                                Nomads@outlook.com
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <AddressIcon name="address-book" style={{color: ThemeColor, fontSize: 16}}></AddressIcon>
                        <Text style={{marginTop: '1%', color: 'grey', flexDirection: 'row'}}>
                            A-5, Block 4, North Nazimabad, Karachi, Pakistan, Asia
                        </Text>
                    </View>
                </View>
            </View>
            </>
        );
    }
}

export default OperatorCard;

const styles = StyleSheet.create({
    Container: {
     
        width: 250,
        alignSelf: 'center',
        height:200,
        borderColor:'black',
        borderRadius: 5,
        borderWidth:0.7,
        marginTop: 30,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
        
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
