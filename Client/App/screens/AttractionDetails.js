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
import AttractionCard from '../components/AttractionCard';
import TourCard from '../components/TourCard';
import IconWithText from '../components/IconWithText';
import Reviews from '../components/Review';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatListContainer from '../components/FlatListContainer';
import {Rating} from 'react-native-elements';
import LoadingIndicator from '../components/LoadingIndicator';
import ContentLoader, { Facebook } from 'react-content-loader/native'


export default class AttractionDetails extends Component {
  state = {
    data: undefined,
  };

  componentDidMount() {
    const AttractionData = this.props.navigation.getParam(
      'AttractionData',
      'default',
    );

    fetch(
      `https://travelog-pk.herokuapp.com/attraction/${AttractionData.attraction_id}`,
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          data: responseJson,
        });
      })
      .catch(err => console.log(err));
  }

  renderTop = (image, name) => {
    return (
      <ImageBackground
        source={{uri: `https://travelog-pk.herokuapp.com/images/${image}`}}
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

  renderDetails = () => {
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
          subtitle={this.state.data[0].city_name}
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
    const apiUrl = `https://travelog-pk.herokuapp.com/destination/attraction/`;
    console.log(this.state.data);
    return (
      <FlatListContainer style={{marginLeft: 8}} title="Nearby Attractions">
        <FlatList
          horizontal
          data={this.state.data ? this.state.data[1] : null}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <AttractionCard id={item} api={apiUrl} />}
        />
      </FlatListContainer>
    );
  };

  renderMap = () => {
    return (
      <View style={{marginLeft: 10, marginRight: 10, marginTop: 15}}>
        <TouchableWithoutFeedback>
          <ImageBackground
            source={map}
            style={{
              height: Dimensions.get('window').height / 3.5,
            }}></ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
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
    const AttractionData = this.props.navigation.getParam(
      'AttractionData',
      'default',
    );

    return (
      <ScrollView>
        {this.renderTop(AttractionData.image_path, AttractionData.name)}
        {/* {this.renderSelections()} */}
        {this.state.data ? (
          this.renderDetails()
        ) : (
          <View style={{width:'60%', marginLeft: '10%'}}>
            <Facebook speed={0.5} height={150}/>
          </View>
        )}
        {this.state.data ? (
          this.renderOverview()
        ) : (
          <View style={{width:'60%', marginLeft: '10%'}}>
            <Facebook speed={0.5} height={150}/>
          </View>
        )}
        {this.state.data ? (
          this.renderNearbyAttractions()
        ) : (
          <View style={{width:'60%', marginLeft: '10%'}}>
            <Facebook speed={0.5} height={150}/>
          </View>
        )}
        {this.renderMap()}
        {this.renderRelatedTours()}
        {this.renderReviews()}
      </ScrollView>
    );
  }
}
