import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import HeaderImage from '../components/HeaderImage';
import image from '../assets/images/4.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeColor , BackgroundColor , BorderColor} from '../assets/Colors/Colors';
import TextCutter from '../components/TextCutter';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native';

import IconWithText from '../components/IconWithText';
import OperatorIcon from '../components/OperatorIcon';
import {Container, Header, Content, Accordion} from 'native-base';
import PlanItem from '../components/PlanItem';
import PlanCard from '../components/PlanCard';

export default class TourDetail extends Component {
  state = {
    saved: false,
  };

  render() {
    const overview =
      'Gilgit-Baltistan formerly known as the Northern Areas,is the northernmost territory administered by Pakistan.It is part of the larger Kashmir region, which is the subject of a territorial dispute between India, Pakistan, and China. It borders Azad Kashmir to the south, the province of Khyber Pakhtunkhwa to the west, the Wakhan Corridor of Afghanistan to the north, the Xinjiang region of China, to the east and northeast, and the Indian-administered state of Jammu and Kashmir to the southeast , Gilgit-Baltistan is part of the greater Kashmir region, which is the subject of a long-running conflict between Pakistan and India. The territory shares a border with Azad Kashmir, together with which it is referred to by the United Nations and other international organisations as Pakistan administered Kashmir.[1][note 1] Gilgit-Baltistan is six times the size of Azad Kashmir.[13] The territory also borders Indian-administered Jammu and Kashmir state to the south and is separated from it by the Line of Control, the de facto border between India and Pakistan.';
    const {width, height} = Dimensions.get('window');
    return (
      <ScrollView style={{backgroundColor:BackgroundColor}}>
        <HeaderImage image={image} style={{height: height / 3}}></HeaderImage>
        <View style={{marginRight:15,marginLeft:15}}>
        <View >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Gilgit Baltistan
            </Text>

            <Text>
              <Icon
                name={this.state.saved ? 'bookmark' : 'bookmark-o'}
                size={35}
                color={ThemeColor}
              />
            </Text>
          </View>
          <TextCutter text={overview} limit={150} style={{lineHeight:22}}></TextCutter>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:10}}>
          <View style={{flexDirection: 'column'}}>
            <IconWithText
              icon="account-supervisor"
              title="Speciality:"
              subtitle="Family"></IconWithText>
            <IconWithText
              icon="calendar-check"
              title="Departure:"
              subtitle="2 October,2019"></IconWithText>
          </View>
          <View style={{flexDirection: 'column'}}>
            <IconWithText
              icon="timer"
              title="Duration"
              subtitle="11 Days"></IconWithText>
            <IconWithText
              icon="seat-recline-normal"
              title="Seats Left"
              subtitle="10"></IconWithText>
          </View>
        </View>

        <View style={{borderWidth:0.5,marginTop:10,borderRadius:5,paddingBottom:10,paddingTop:10,backgroundColor:'white',borderColor:BorderColor}}>
          <Text style={{paddingLeft:10,fontSize:15,marginBottom:10}}> This Tour is operated by:</Text>
          <OperatorIcon
            name="Nomad's Adventure"
            avatar={image}
            rating={4}
            verified={true}
            style={{margin: 10}}></OperatorIcon>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <IconWithText
              onPress={() => Linking.openURL(`tel:${'03002344567'}`)}
              icon="phone"
              title="Call"
              textstyle={{marginLeft: 3}}
              style={{
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                borderColor: ThemeColor
              }}></IconWithText>

            <IconWithText
              onPress={() => Linking.openURL('mailto:touroperator@gmail.com')}
              icon="email"
              title="Mail"
              textstyle={{marginLeft: 3}}
              style={{
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                borderColor: ThemeColor,
              }}></IconWithText>

            <IconWithText
              onPress={() =>
                Linking.openURL(
                  `https://maps.apple.com/?q=${'Orangi Town'}&ll=${'24.950083'},${'66.992844'}`,
                )
              }
              icon="map-marker"
              title="Locate"
              textstyle={{marginLeft: 3}}
              style={{
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                borderColor: ThemeColor
              }}></IconWithText>
          </View>
          </View>
          <View style={{marginTop:10,borderWidth:0.5,padding:5,backgroundColor:'white',borderRadius:5,borderColor:BorderColor}}>
          <PlanCard></PlanCard>
          </View>
    
          </View>
      </ScrollView>
    );
  }
}
