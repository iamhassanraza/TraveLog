import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  AsyncStorage,
  Dimensions,
} from 'react-native';
import coverPhoto from '../assets/images/6.jpg';
import logo from '../assets/images/7.jpg';
import image from '../assets/images/4.jpg';
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import {ThemeColor} from '../assets/Colors/Colors';
import OperatorRating from '../components/OperatorRating';
import OperatorCard from '../components/OperatorCard';
import AboutOperator from '../components/AboutOperator';
import Gallery from '../components/Gallery';
import Navigation from './OperatorNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class OperatorProfile extends Component {


    state = {
        followed: this.props.followStatus,
      };
    
      followButton = async () => {
        console.log('id -------------->', this.props.id);
        this.setState(prevState => ({
          followed: !prevState.followed,
        }));
    
        const User = JSON.parse(await AsyncStorage.getItem('User'));
        console.log(User, 'CUSER FROM ASYNC');
        const Token = User.token;
        const id = this.props.id;
        var Response = null;
        console.log('followed ==========> ', this.state.followed, id);
        if (this.state.followed) {
          Response = await fetch(
            `https://travelog-adonis.herokuapp.com/api/v1/user/follow?user_id=${id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Token}`,
              },
            },
          );
        } else {
          Response = await fetch(
            `https://travelog-adonis.herokuapp.com/api/v1/user/unfollow?user_id=${id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Token}`,
              },
            },
          );
        }
        const JsonResponse = await Response.json();
        if (parseInt(Response.status) === 400) {
          console.log('400');
          alert(JsonResponse.message);
        } else if (parseInt(Response.status) === 200) {
          console.log('200', JsonResponse);
        } else {
          alert('something is wrong');
        }
      };



  render() {
    const operatorData = this.props.navigation.getParam(
      'operatorData',
      'Got no data from tour card via navigation',
    );

    console.log(operatorData, 'OPP DATAATATA');

    return (
      <ScrollView style={styles.container}>
        <View style={{}}>
          <View
            style={{
            //   borderWidth: operatorData[0].cover ? 0 : 1,
            //   borderColor: operatorData[0].cover ? 'white' : '#b3b5b4',
            }}>
            <ImageBackground
              source={{
                uri: operatorData.profile_pic_url
                ? operatorData.profile_pic_url : 'https://travelog-pk.herokuapp.com/images/default.png',
              }}
              style={styles.coverPhoto}
            />
          </View>
          <View style={styles.logoButton}>
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: operatorData.profile_pic_url
                  ? operatorData.profile_pic_url : 'https://travelog-pk.herokuapp.com/images/default.png',
                }}
                style={styles.logo}
              />
            </View>
          <TouchableOpacity style={{marginLeft:'20%',width: '100%'}} onPress={()=> this.followButton()}>
     
              <View style={styles.followButton}>
                <FollowIcon name="user-follow" color="white" />
                <Text style={{color: 'white'}}>
                  { operatorData.userFollowing.length > 0 ? 'Unfollow' : 'Follow'} 
                </Text>
              </View>
         
          </TouchableOpacity>
          </View>
          <View style={{marginTop: '2%', marginLeft: '5%'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{operatorData.first_name}</Text>
            {/* <Text style={styles.shortIntro}>{operatorData.bio}</Text> */}
          </View>
        </View>
        <View style={{height: Dimensions.get('window').height * 0.965 - 110}}>
          <Navigation
            screenProps={{
              navigation: this.props.navigation,
              email: operatorData.email,
              phone: operatorData.contact_no,
              address: operatorData.major,
              description: operatorData.bio,
              operatorId: operatorData.id,
              name: operatorData.first_name,
              numeric_rating: 4,
              reviewsData: operatorData.reviews
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  coverPhoto: {
    height: Dimensions.get('window').height / 4,
  },
  logoButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginLeft: '5%',
    width: '30%',
    marginTop: -30,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#b3b5b4',
    alignSelf: 'center',
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
    borderRadius: 5,
  },
  shortIntro: {
    marginTop: '2%',
    fontSize: 14,
    marginRight: '5%',
    color: '#6b6b69',
  },
});
