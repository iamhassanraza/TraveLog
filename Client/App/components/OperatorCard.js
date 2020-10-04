import React from 'react';
//import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Image, Button, Icon, Right } from 'native-base';
import {
  View,
  Linking,
  Text,
  ImageBackground,
  AsyncStorage,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {ThemeColor, ThemeGrey, BackgroundColor} from '../assets/Colors/Colors';
import {VerifiedIcon} from '../assets/icons/Icons';
import FollowIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconWithText from './IconAndText';
import {Rating} from 'react-native-ratings';
import {withNavigation} from 'react-navigation';
import LoadingIndicator from '../components/LoadingIndicator';
import {TouchableOpacity} from 'react-native-gesture-handler';

class OperatorCard extends React.Component {
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
    console.log('followed ==========> ', this.state.followed, this.props.id);
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
    const {
      id,
      first_name,
      email,
      profile_pic_url,
      contact_no,
      address,
      followStatus,
    } = this.props;
   
    return (
      <TouchableWithoutFeedback
      onPress={()=>this.props.navigation.push('OperatorProfile', {
          operatorData : this.props.data
      })}
      >
        <View style={[styles.Container, this.props.style]}>
          <View style={{paddingBottom: '2%'}}>
            <View
              //style={{borderWidth: this.state.cardData[0].cover? 0 : 1, borderColor: this.state.cardData[0].cover? 'white' : '#b3b5b4'}}
              style={{borderWidth: 1, borderColor: '#b3b5b4'}}>
              <ImageBackground
                source={{
                  uri: profile_pic_url
                    ? profile_pic_url
                    : 'http://192.168.100.15:3001/images/default.png',
                }}
                style={{height: 100}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginLeft: '5%',
                  height: 80,
                  width: '40%',
                  marginTop: -30,
                }}>
                <Image
                  source={{
                    uri: profile_pic_url
                      ? profile_pic_url
                      : 'http://192.168.100.15:3001/images/default.png',
                  }}
                  style={{
                    height: 80,
                    width: 80,
                    borderColor: '#b3b5b4',
                    borderWidth: 2,
                    borderRadius: 50,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.followButton()}>
                <View style={styles.FollowButton}>
                  <FollowIcon name="user-follow" color="white" />
                  <Text style={{color: 'white'}}>
                    {followStatus ? 'Unfollow' : 'Follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '5%',
              }}>
              <View style={{flex: 4, marginLeft: '1%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {first_name}
                  {/* {this.state.cardData[0].is_verified ? <VerifiedIcon size={17}></VerifiedIcon> : "" } */}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: 'orange', fontWeight: 'bold'}}>5</Text>
                  <Rating
                    readonly={true}
                    ratingBackgroundColor="red"
                    ratingCount={5}
                    startingValue={3}
                    imageSize={15}
                    style={{alignItems: 'flex-start'}}
                  />
                </View>
              </View>
            </View>
            <View style={{marginLeft: '5%', marginTop: '1%'}}>
              <IconWithText
                name="phone"
                text={contact_no}
                iconstyle={{}}
                textstyle={{marginLeft: '2%', marginRight: '2%'}}
              />
              <IconWithText
                name="email"
                text={email}
                iconstyle={{}}
                textstyle={{marginLeft: '2%', marginRight: '2%'}}
              />
              <IconWithText
                name="map-marker"
                text={address}
                iconstyle={{}}
                textstyle={{marginLeft: '2%', marginRight: '2%'}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(OperatorCard);

const styles = StyleSheet.create({
  Container: {
    borderColor: '#8b8e8f',
    borderWidth: 0,
    width: Dimensions.get('window').width / 1.5,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
    paddingBottom: '5%',
  },
  ImageContainer: {
    //height:120,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'red',
  },
  TourCardHeading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  TourCardDate: {
    fontSize: 12,
    color: 'red',
  },
  TextConatiner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderRadius: 50,
  },
  LogoButton: {
    flexDirection: 'row',
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
