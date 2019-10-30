import React, { Component } from 'react'
import { Text,ScrollView, View, StyleSheet, ImageBackground, FlatList, Image, Dimensions } from 'react-native'
import coverPhoto from '../assets/images/6.jpg'
import logo from '../assets/images/7.jpg'
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import  { ThemeColor } from '../assets/Colors/Colors';
import OperatorRating from '../components/OperatorRating';
import OperatorCard from '../components/OperatorCard';


export default class OperatorProfile extends Component {



    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <ImageBackground source={coverPhoto} style={styles.coverPhoto}/>
                </View>
                <View style={styles.logoButton}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo}></Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.followButton}>
                            <FollowIcon name="user-follow" color='white'></FollowIcon>
                            <Text style={{color: 'white'}}>Follow</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: '2%', marginLeft: '5%'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Nomads Adventure Services
                    </Text>
                    <Text style={styles.shortIntro}>
                        Developing an organized presentation starts with your introduction. The introduction opens your speech. I am also very delighted by your intro.
                    </Text>
                </View>
                <View>
                    <OperatorRating></OperatorRating>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width/1
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
        borderColor: 'white',
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
