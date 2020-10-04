import React, {Component} from 'react';
import {Text,View, ImageBackground,StyleSheet,ScrollView,Dimensions,AsyncStorage,Button,TouchableWithoutFeedback,FlatList,} from 'react-native';
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

attraction = [4, 7];

export default class DestinationDetails extends Component {
  state = {
    data: this.props.navigation.getParam('DestinationData','default',),
    attractionsData:[]
  };


  componentDidMount(){
    this.fetchAttractions();
  }
  // componentDidMount() {

  //   // "Data Coming From Destination Card"
  //   const DestinationData = this.props.navigation.getParam('DestinationData','default');

  //   fetch(
  //     `https://travelog-pk.herokuapp.com/destination/${DestinationData.destination_id}`,
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(responseJson => {
  //       this.setState({
  //         data: responseJson,
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

// "Top Of the Screen having image and album icon "
  renderTop = (image, name) => {
    return (
      <ImageBackground
        source={{uri: `https://c7.uihere.com/files/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg`}}
        style={{
          height: Dimensions.get('window').height / 1.8,
          width: "100%",
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0.3)',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
            {' '}
            {name.toUpperCase()}{' '}
          </Text>

          {/* <View
            style={{
              backgroundColor: 'white',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '1%',
            }}>
            <Text onPress={() => alert('Navigate to Albums')}>
              {' '}
              <Icon name="image-album" style={{fontSize: 17, color: 'white'}} />
            </Text>
            <Text
              onPress={() => alert('Navigate to Albums')}
              style={{fontSize: 17, color: 'white'}}>
              {' '}
              Album{' '}
            </Text>
          </View> */}
        </View>
      </ImageBackground>
    );
  };

// "Details of the tour which includes Best time, City, Rating . (Rating not completed yet)"
  renderDetails = name => {
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
          subtitle={name}
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
          startingValue={this.props.rating}
          style={{alignSelf: 'flex-start', marginTop: '3%'}}
        />
      </View>
    );
  };

// "It shows overview/description of the tour by Using TEXTCUTTER component"
  renderOverview = () => {
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
          text={this.state.data.description}></TextCutter>
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
      <FlatListContainer style={{marginLeft: '3%'}} title="Top Attractions">
        <FlatList
          horizontal
          data={this.state.attractionsData}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <AttractionCard id={item.attraction_id} name={item.name} wholeData={item} />}
        />
      </FlatListContainer>
    );
  };


// "It shows map 
  renderMap = () => {
    if(this.state.data !== undefined){
    return (
      <Map latitude={this.state.data.latitude} longitude={this.state.data.longitude}></Map>
    );
    }
  };



// "It shows Related Tours (API not completed)"
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

// " It shows all the reviews of the destination (API not completed yet)"
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




    const DestinationData = this.props.navigation.getParam('DestinationData','default',);
    const attraction = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   console.log(this.state.attractionsData[0],"ATT DATA")
    return (
      <ScrollView style={{flex:1}}>
        {this.renderTop(DestinationData.image_path, this.state.data.recommended_season)}
        {/* {this.renderSelections()} */}
        {this.renderDetails(this.state.data.recommended_season) }
        { this.renderOverview()}
        {/* {this.state.data ? (this.renderNearbyAttractions()) : 
        (
        <View style={{width:'60%', marginLeft: '10%'}}>
          <Facebook speed={0.5} height={150}/>
        </View>
        )} */}
        {this.renderMap()}
        {this.renderNearbyAttractions()}
        
        {/* {this.renderRelatedTours()}
        {this.renderReviews()} */}
      </ScrollView>
    );
  }
}
