import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import {ThemeColor, BackgroundColor} from '../assets/Colors/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../assets/images/7.jpg';
import HeaderImage from './HeaderImage';
import DateIcon from 'react-native-vector-icons/Fontisto';
import SpecialityIcon from 'react-native-vector-icons/SimpleLineIcons';
import LoadingIndicator from '../components/LoadingIndicator';
import {withNavigation} from 'react-navigation';
import SeatsLeftIcon from 'react-native-vector-icons/MaterialIcons';
import ContentLoader, {Facebook} from 'react-content-loader/native';

import IconWithText from './IconAndText';
// import IconWithText from './IconWithText'
import OperatorIcon from './OperatorIcon';

class TourCard extends React.Component {
  state = {
    data: this.props.tourData,
    saved: this.props.saved,
    refreshing: false,
  };



  savePost = async postId => {
    this.setState(prevState => ({
      saved: !prevState.saved,
    }));
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    var Response = null;
    if (this.state.saved) {
      Response = await fetch(
        `https://travelog-adonis.herokuapp.com/api/v1/user/save/post?post_id=${postId}&user_id=${User.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${User.token}`,
          },
        },
      );
    } else {
      Response = await fetch(
        `https://travelog-adonis.herokuapp.com/api/v1/user/unsave/post?post_id=${postId}&user_id=${User.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${User.token}`,
          },
        },
      );
    }
    const JsonResponse = await Response.json();
    if (parseInt(Response.status) === 400) {
      alert(JsonResponse.message);
    } else if (parseInt(Response.status) === 200) {
      alert(JsonResponse.message);
    } else {
      alert('something is wrong');
    }
  };

  render() {
    // if (this.state.data[0]) {
      const start_Date = new Date(this.props.departure_date);
    
      //const end_date = new Date(this.state.data[0].end_date);
      let formatted_start_date =
      start_Date.getDate() +
        '-' +
        (start_Date.getMonth() + 1) +
        '-' +
        start_Date.getFullYear();

    //   let formatted_end_date =
    //     end_date.getDate() +
    //     '-' +
    //     (end_date.getMonth() + 1) +
    //     '-' +
    //     end_date.getFullYear();

    //   const duration =
    //     (end_date.getTime() - start_Date.getTime()) / (1000 * 3600 * 24);


        const {id,seatsLeft,title,price,departure_date,speciality,operator,photoUrl,number_of_days,wholeData} = this.props;
        
      return (
  
        <TouchableWithoutFeedback
         onPress={() =>
            this.props.navigation.navigate('TourDetail', {
              TourData: wholeData,
              saved: this.state.saved
            })
         }
          >
          <View>
            <View style={[styles.Container, this.props.style]}>
              <View style={{flex: 2}}>
                <HeaderImage
                  imageUrl={photoUrl}
                  tag={number_of_days}
                  price={price}
                />
              </View>
              <View style={styles.TextConatiner}>
                <View
                  style={{
                    flex: 4,
                    justifyContent: 'space-around',
                    marginLeft: '2%',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                    {title}
                  </Text>
                  <IconWithText
                    name="calendar-check"
                    // text={`From: ${formatted_start_date} to ${formatted_end_date}`}
                    text={`Date: ${formatted_start_date}`}
                    textstyle={{marginLeft: '2%', marginRight: '2%'}}
                  />
                  <IconWithText
                    name="account-supervisor"
                    text={`Speciality: ${speciality}`}
                    textstyle={{marginLeft: '2%', marginRight: '2%'}}
                  />
                  <IconWithText
                    name="seat-recline-normal"
                    text={`By: ${operator}`}
                    textstyle={{marginLeft: '2%', marginRight: '2%'}}
                  />
                </View>

                {/* Save icon */}

                <View style={{alignItems: 'center', paddingTop: '2%'}}>
                  <TouchableWithoutFeedback
                    onPress={() => {this.savePost(id)}}>
                    <View style={{padding: 5, alignItems: 'center'}}>
                      <Icon
                        name={this.state.saved ? 'bookmark' : 'bookmark-o'}
                        size={30}
                        color={ThemeColor}
                      />
                      <Text
                        style={{
                          marginTop: -5,
                          color: 'grey',
                          fontSize: 13,
                          fontWeight: 'bold',
                        }}>
                        {this.state.saved ? 'Saved' : 'Save'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>

              {/* TourOperator */}

              {/* <OperatorIcon style={{padding:'2%',marginTop:5}} name={this.state.data[0].name} avatar={this.state.data[0].operatordp} rating={this.state.data[0].numeric_rating} verified={this.state.data[0].is_verified} ></OperatorIcon> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    // } else {
    //   return (
    //     <View style={{padding: 5}}>
    //       <Facebook speed={0.5} />
    //     </View>
    //   );
    // }
  }
}

export default withNavigation(TourCard);

const styles = StyleSheet.create({
  Container: {
    width: Dimensions.get('window').width / 1.5,
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#8b8e8f',
    paddingBottom: '5%',
    flex: 1,
  },
  TourCardHeading: {
    fontSize: 15,

    // color: ThemeColor,
  },
  TourCardDate: {
    fontSize: 12,
    color: '#5c5353',
  },
  TextConatiner: {
    flexDirection: 'row',
    paddingBottom: '2%',
    flex: 3,
  },
});
