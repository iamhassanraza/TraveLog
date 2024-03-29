import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  FlatList,
  AsyncStorage
} from 'react-native';
import image from '../assets/images/shan.jpg';
import image5 from '../assets/images/im5.jpg';
import map from '../assets/images/map.jpg';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import TextCutter from '../components/TextCutter';
import AttractionCard from '../components/AttractionCard';
import TourCard from '../components/TourCard';
import IconWithText from '../components/IconWithText';
import Reviews from '../components/Review';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatListContainer from '../components/FlatListContainer';
import {Rating} from 'react-native-elements';
import LoadingIndicator from '../components/LoadingIndicator';
import ContentLoader, { Facebook } from 'react-content-loader/native'
import Map from '../components/Map'

export default class AttractionDetails extends Component {
  state = {
    //data: this.props.navigation.getParam('AttractionData','default',),
    data:this.props.navigation.getParam(
      'AttractionData',
      'default',
    ),
    city:this.props.navigation.getParam(
      'city',
      'N/A',
    ),
    attractionsData:[]
  };

  componentDidMount(){
    this.fetchAttractions();
  }
 

  renderTop = (image, name) => {
    return (
      <ImageBackground
        source={{uri: image}}
        style={{
          height: Dimensions.get('window').height / 1.8,
          width: "100%",
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0.3)',
            justifyContent: 'flex-end',
            borderWidth: 2,
            flexDirection:'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: name.length < 17 ? 32 : 26,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {name.toUpperCase()}
          </Text>

        </View>
      </ImageBackground>
    );
  };

  renderDetails = () => {
    return (
      <View style={{marginLeft: '4%'}}>
        <IconWithText
          title={'Best Time To Visit : '}
          subtitle={this.state.data.recommended_season}
          linear={'true'}
          icon={'calendar-month-outline'}
          style={{alignItems: 'center', marginTop: '2%'}}
          iconstyle={{fontSize: 23, marginRight: '1%'}}
          textstyle={{fontSize: 16}}></IconWithText>

        <IconWithText
          title={'City : '}
          subtitle={this.state.city}
          linear={'true'}
          icon={'map-marker-radius'}
          style={{alignItems: 'center', marginTop: '2%'}}
          iconstyle={{fontSize: 23, marginRight: '1%'}}
          textstyle={{fontSize: 16}}></IconWithText>

        <Rating
          type="custom"
          readonly={true}
          showRating={false}
          imageSize={15}
          fractions={1}
          startingValue={4}
          style={{alignSelf: 'flex-start', marginTop: '3%'}}
        />
      </View>
    );
  };

  renderOverview = (desc) => {
    return (
      <View style={{padding: 5, paddingBottom: 0}}>
        <TextCutter
          style={{
            marginTop: 10,
            marginLeft: 14,
            marginRight: 14,
            lineHeight: 20,
            fontSize: 14,
            color: ThemeGrey,
          }}
          limit={350}
          text={desc}></TextCutter>
      </View>
    );
  };

  fetchAttractions = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(typeof User.token, 'TOKEN');
    fetch(`https://travelog-adonis.herokuapp.com/api/v1/get/attractions?destination_id=${this.state.data.destination_id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${User.token}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson, 'ATTTTTTTTT');
        this.setState({
     
          attractionsData: responseJson,
      
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };


// "It shows all the attraction cards of the same destination"
  renderNearbyAttractions = () => {

    return (
      <FlatListContainer NoViewAll={true} style={{marginLeft: '3%'}} title="Top Attractions">
        <FlatList
          horizontal
          data={this.state.attractionsData}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <AttractionCard city={this.state.city} id={item.attraction_id} imageUrl={item.image} name={item.name} wholeData={item} />}
        />
      </FlatListContainer>
    );
  };

  renderMap = () => {
    if(this.state.data !== undefined){
      return (
        <Map latitude={this.state.data.latitude} longitude={this.state.data.longitude}></Map>
      );
      }
  };

  renderRelatedTours = () => {
    return (
      <FlatListContainer style={{marginLeft: 10}} title="Related Tours">
        <FlatList
          horizontal
          data={[1, 2]}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TourCard
              style={{marginRight: 10}}
              id={item}
              seatsLeft={10}></TourCard>
          )}
          keyExtractor={item => item}
        />
      </FlatListContainer>
    );
  };

  renderReviews = () => {
    return (
      <View>
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <Text
            style={{
              fontSize: 25,
              color: '#616963',
              borderBottomWidth: 1,
              borderBottomColor: ThemeGrey,
            }}>
            Reviews
          </Text>
        </View>

        <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
          <Reviews></Reviews>
          <Reviews></Reviews>
          <Reviews></Reviews>
          <Reviews></Reviews>
        </View>
      </View>
    );
  };

  render() {
   
    console.log(this.state.data,"ATTT DETAILS")
    return (
      <ScrollView>
        {this.renderTop(this.state.data.image, this.state.data.name)}
        {/* {this.renderSelections()} */}
        { this.renderDetails() }
        { this.renderOverview(this.state.data.description)}
        { this.renderNearbyAttractions() }
        {this.renderMap()}
   
 
      </ScrollView>
    );
  }
}
