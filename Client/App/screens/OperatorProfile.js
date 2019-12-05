import React, { Component } from 'react'
import { Text,SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, FlatList, Image, Dimensions } from 'react-native'
import coverPhoto from '../assets/images/6.jpg'
import logo from '../assets/images/7.jpg'
import image from '../assets/images/4.jpg'
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import  { ThemeColor } from '../assets/Colors/Colors';
import OperatorRating from '../components/OperatorRating';
import OperatorCard from '../components/OperatorCard';
import AboutOperator from '../components/AboutOperator';
import Gallery from '../components/Gallery'
import Navigation from './Naviagation'


export default class OperatorProfile extends Component {



    render() {
        const operatorData = this.props.navigation.getParam('operatorData','Got no data from tour card via navigation')
        const operatorId = this.props.navigation.getParam('operatorId','no ope id provided')
        return (
            <ScrollView style={styles.container}>
                <View style={{}}>
                    <View style={{ borderWidth: operatorData[0].cover? 0 : 1, borderColor: operatorData[0].cover? 'white' : '#b3b5b4'}}>
                        <ImageBackground source={{uri: operatorData[0].cover? `http://192.168.100.15:3001/images/${operatorData[0].cover}`: 'http://192.168.100.15:3001/images/default.png' }} style={styles.coverPhoto}/>
                    </View>
                    <View style={styles.logoButton}>
                        <View style={styles.logoContainer}>
                            <Image source={{uri: operatorData[0].dp? `http://192.168.100.15:3001/images/${operatorData[0].dp}`: 'http://192.168.100.15:3001/images/default.png'}} style={styles.logo}></Image>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.followButton}>
                                <FollowIcon name="user-follow" color='white'></FollowIcon>
                                <Text style={{color: 'white'}}>
                                    {operatorData[1] ? 'unfollow' : 'follow'} 
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: '2%', marginLeft: '5%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            {operatorData[0].name}
                        </Text>
                        <Text style={styles.shortIntro}>
                            {operatorData[0].about} 
                        </Text>
                    </View>
                </View>
                <View style={{height: Dimensions.get('window').height*0.96}}>
                    <Navigation
                        screenProps={{
                                        email: operatorData[0].email,
                                        phone: operatorData[0].phone,
                                        address: operatorData[0].street_address,
                                        description: operatorData[0].description,
                                        operatorId: operatorId,
                                        name: operatorData[0].name,
                                        numeric_rating: operatorData[0].numeric_rating
                                    }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width/1,
        height: '100%'
    },
    coverPhoto: {
        height: Dimensions.get("window").height/5
    },
    logoButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoContainer: {
        marginLeft: '5%',
        width: '30%',
        marginTop: -30
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#b3b5b4',
        alignSelf: 'center'
    },
    buttonContainer: {
        width: '65%',
        borderWidth: 0,
    },
    followButton: {
        height: 35,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: ThemeColor,
        alignSelf: 'center',
        borderRadius: 5
    },
    shortIntro: {
            marginTop: '2%',
            fontSize: 14,
            marginRight:'5%',
            color: '#6b6b69'
        }
})
