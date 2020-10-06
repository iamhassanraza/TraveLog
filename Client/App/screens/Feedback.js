import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {Container, Header, Content, Item, Input, Button} from 'native-base';

import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import map from '../assets/images/map.jpg';
import IconWithText from '../components/IconAndText';

export default class Feedback extends Component {
  state = {
    message: '',
  };

  sendFeedback = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    var Response = null;
    Response = await fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/user/feedback`,
      {
        method: 'POST',
        body: JSON.stringify({
          subject: 'Contact',
          body: this.state.message,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${User.token}`,
        },
      },
    );
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <Container style={{backgroundColor: 'white'}}>
          <View style={{height: '8%', backgroundColor: ThemeColor}}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                paddingTop: '3%',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Contact Us
            </Text>
          </View>

          <ImageBackground
            source={map}
            style={{
              height: Dimensions.get('window').height / 3.7,
              width: Dimensions.get('window').width / 1,
            }}
          />

          <Content
            style={{
              marginTop: '5%',
              paddingBottom: '30%',

              marginRight: '2.5%',
              borderRadius: 20,
            }}>
            <View style={{paddingRight: '1%'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  marginBottom: '1%',
                  marginTop: '1%',
                }}>
                <IconWithText
                  text={'Office 304 , Anum Blessings P.E.C.H.S Karachi'}
                  name={'map-marker'}
                  textstyle={{fontSize: 15}}
                  iconstyle={{fontSize: 30}}
                />
              </View>

              <View style={{backgroundColor: 'white', marginBottom: '1%'}}>
                <IconWithText
                  text={'03132055798'}
                  name={'phone'}
                  textstyle={{fontSize: 15, marginLeft: '2%'}}
                  iconstyle={{fontSize: 30}}
                />
              </View>

              <View style={{backgroundColor: 'white', marginBottom: '1%'}}>
                <IconWithText
                  text={'salimehdi144@gmai.com'}
                  name={'email'}
                  textstyle={{fontSize: 15, marginLeft: '2%'}}
                  iconstyle={{fontSize: 30}}
                />
              </View>
            </View>
            <Text
              style={{
                marginTop: '5%',
                fontSize: 25,
                color: ThemeColor,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {' '}
              Message{' '}
            </Text>
            <Item style={{width: '80%', alignSelf: 'center'}}>
              <Input
                multiline={true}
                color="black"
                onChangeText={text => {
                  this.setState({message: text});
                  // this.validate(text);
                }}
                placeholder="Write a message"
                placeholderTextColor="grey"
                style={{color: 'grey'}}
              />
            </Item>

            <Button
              onPress={() => {
                this.sendFeedback();
              }}
              rounded
              style={{
                justifyContent: 'center',
                marginTop: '3%',
                backgroundColor: ThemeColor,
                marginBottom: '2%',
                width: '40%',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Send
              </Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
