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
} from 'react-native';
import image from '../assets/images/shan.jpg';
import image5 from '../assets/images/im5.jpg';
import map from '../assets/images/map.jpg';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';
import TextCutter from '../components/TextCutter';
import DestinationCard from '../components/DestinationCard';
import TourCard from '../components/TourCard';
import IconWithText from '../components/IconWithText';
import Reviews from '../components/Review';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatListContainer from '../components/FlatListContainer';
import {Rating} from 'react-native-elements';
import LoadingIndicator from '../components/LoadingIndicator';


const DATA = [
  {
    price: 300,
    title: 'Hunza',
    daysLeft: 2,
    speciality: 'Girls',
    seatsLeft: 10,
    startDate: '9 oct',
    endDate: '20 oct',
    OperatorCard: {name: 'Hunza', image, rating: 3.4, verified: true},
  },
  {
    price: 300,
    daysLeft: 2,
    title: 'Kashmir',
    speciality: 'Girls',
    seatsLeft: 10,
    startDate: '9 oct',
    endDate: '20 oct',
    OperatorCard: {name: 'Kashmir', image, rating: 3.4, verified: true},
  },
  {
    price: 300,
    daysLeft: 2,
    speciality: 'Girls',
    seatsLeft: 10,
    title: 'China Border',
    startDate: '9 oct',
    endDate: '20 oct',
    OperatorCard: {name: 'Skardu ', image, rating: 3.4, verified: true},
  },
  {
    price: 300,
    daysLeft: 2,
    speciality: 'Girls',
    seatsLeft: 10,
    title: 'Turkey',
    startDate: '9 oct',
    endDate: '20 oct',
    OperatorCard: {name: 'Gilgit', image, rating: 3.4, verified: true},
  },
  {
    price: 300,
    daysLeft: 2,
    speciality: 'Girls',
    seatsLeft: 10,
    title: 'Skardu',
    startDate: '9 oct',
    endDate: '20 oct',
    OperatorCard: {name: 'Sawat', image, rating: 3.4, verified: true},
  },
];

export default class AttractionDetails extends Component {
  state = {
    data:undefined
  };


  componentDidMount(){

    const DestinationData = this.props.navigation.getParam('DestinationData','default')

    fetch(`http://192.168.100.13:3001/destination/${DestinationData.destination_id}`)
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
          this.setState({
           data : responseJson
          })
        }).catch(err=>console.log(err))
}





  renderTop = (image,name) => {
    
   
    return (
      
      <ImageBackground
        source={{uri:`http://192.168.100.13:3001/images/${image}`}}
        style={{
          height: Dimensions.get('window').height / 1.8,
          width: Dimensions.get('window').width / 1,
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

          <View
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
          </View>
        </View>
      </ImageBackground>
    );
  };


  renderDetails = (name) => {
    return (
      <View style={{marginLeft: '4%'}}>
        <IconWithText
          title={'Best Time To Visit : '}
          subtitle={this.state.data[0].recommended_season}
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
          text={this.state.data[0].description}></TextCutter>
      </View>
    );
  };

  renderNearbyAttractions = () => {
    return (
      <FlatListContainer style={{marginLeft: 8}} title="Nearby Attractions">
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={item => item.OperatorCard.name}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <DestinationCard
            id={3}
            />
          )}
        />

      </FlatListContainer>
    );
  };


  renderMap =() => {
    return(
      <View style={{marginLeft: 10, marginRight: 10, marginTop: 15}}>
      <TouchableWithoutFeedback>
        <ImageBackground
          source={map}
          style={{
            height: Dimensions.get('window').height / 3.5,
          }}></ImageBackground>
      </TouchableWithoutFeedback>
    </View>
    )
  }

  renderRelatedTours = () => {
    return(
      <FlatListContainer style={{marginLeft: 10}} title="Related Tours">
      <FlatList
                    horizontal
                    data={[1,2]}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}}
                    id={item}
                    seatsLeft={10} ></TourCard>}
                    keyExtractor={item => item}
                    />
    </FlatListContainer>
    )
  }


  renderReviews = () => {
    return(
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
    )
  }



  render() {
    
  const DestinationData = this.props.navigation.getParam('DestinationData','default')

    return (
      <ScrollView>
        {this.renderTop(DestinationData.image_path,DestinationData.name)}
        {/* {this.renderSelections()} */}
        {this.state.data ? this.renderDetails(DestinationData.name) :  <LoadingIndicator></LoadingIndicator>}
        {this.state.data ? this.renderOverview() :  <LoadingIndicator></LoadingIndicator> }
        {this.renderNearbyAttractions()}
        {this.renderMap()}
        {this.renderRelatedTours()}
        {this.renderReviews()}
      </ScrollView>
    )
      
  }
}