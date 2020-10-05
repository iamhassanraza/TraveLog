import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
  AsyncStorage,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import {BackgroundColor} from '../assets/Colors/Colors';
import TourCard from '../components/TourCard';
import OperatorCard from '../components/OperatorCard';
import DestinationCard from '../components/DestinationCard';
import image from '../assets/images/1.jpg';
import FlatListContainer from '../components/FlatListContainer';
import OperatorProfile from './OperatorProfile';
import image2 from '../assets/images/im5.jpg';
import ContentLoader, {Facebook} from 'react-content-loader/native';
import Slider from '../components/ImageSlider';
import AllTours from './AllTours';

export default class Home extends Component {
  state = {
    tourids: [],
    operatorids: [],
    destinationids: [],
    refreshing: false,
    tourData: [],
    operatorsData: [],
    toursLoading: true,
    operatorsLoading: true,
    destinationLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.fetchTours();
    this.fetchOperators();
    this.fetchDestinations();
  };

  fetchTours = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(typeof User.token, 'TOKEN');
    fetch(
      'https://travelog-adonis.herokuapp.com/api/v1/search/post?type=post_all&page=1',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${User.token}`,
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          refreshing: false,
          tourData: responseJson.data,
          toursLoading: false,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

  fetchOperators = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(typeof User.token, 'TOKEN');
    fetch('https://travelog-adonis.herokuapp.com/api/v1/get/operators', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${User.token}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
    
        this.setState({
          refreshing: false,
          operatorsData: responseJson,
          operatorsLoading: false,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

  fetchDestinations = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(typeof User.token, 'TOKEN');
    fetch('https://travelog-adonis.herokuapp.com/api/v1/get/destinations', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${User.token}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson, 'DESTT');
        this.setState({
          refreshing: false,
          destinationData: responseJson,
          destinationLoading: false,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

  onPageRefresh = () => {
    //this.setState({tourids:[]})
    this.setState({
      tourids: [],
      operatorids: [],
      destinationids: [],
    });
    this.fetchData();
  };

  render() {
    const apiUrl = `https://travelog-pk.herokuapp.com/destination/card/`;

    console.log(this.state.destinationData, 'DEST DATA');
    return (
      <ScrollView
        style={{backgroundColor: '#F0F0F0', height: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onPageRefresh}
          />
        }>
        {/* <View style={{height: Dimensions.get('window').height*0.3}}>
                        <ImageBackground source={image2} style={{width:'100%',height:"100%"}}>
                            <View style={{backgroundColor:'rgba(0,0,0,0.4)',flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignSelf:'center',width:'80%'}}>
                            Amazing tours and holidays around the world.
                            </Text>
                            <Text style={{color:'#D3EFEE',alignSelf:'center',width:'80%'}}>
                            Find great experiences, trips, and activities at fantastic prices around the globe.
                            </Text>
                            </View>
                        </ImageBackground>


                    </View> */}

        <Slider />

        <View style={{flexDirection: 'column'}}>
          <FlatListContainer style={{marginLeft: '3%'}} navigation={this.props.navigation} title="Popular Tours" navigateTo="AllTours">
            {!this.state.toursLoading ? (
              <FlatList
                horizontal
                data={this.state.tourData}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <TourCard
                    style={{marginRight: 10}}
                    id={item.id}
                    seatsLeft={10}
                    title={item.title}
                    price={item.price}
                    departure_date={item.departure_date}
                    number_of_days={item.number_of_days}
                    speciality={item.speciality}
                    operator={
                      item.users.first_name + ' ' + item.users.last_name
                    }
                    photoUrl={item.postDetail[0].image_url && item.postDetail[0].image_url}
                    wholeData={item}
                    saved={item.userSavedPost.length > 0 ? true : false}
                  />
                )}
                keyExtractor={item => item.id}
              />
            ) : (
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '60%'}}>
                  <Facebook speed={0.5} height={150} />
                </View>
                <View style={{width: '60%', marginLeft: '10%'}}>
                  <Facebook speed={2} height={150} />
                </View>
              </View>
            )}
          </FlatListContainer>

          <FlatListContainer style={{marginLeft: '3%'}} title="Tour Operators">
            {!this.state.operatorsLoading ? (
              <FlatList
                horizontal
                data={this.state.operatorsData}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <OperatorCard
                    id={item.id}
                    first_name={item.first_name}
                    email={item.email}
                    profile_pic_url={item.profile_pic_url}
                    contact_no={item.contact_no}
                    address={item.major}
                    followStatus={
                      item.userFollowing.length === 0 ? false : true
                    }
                    data={item}
                    style={{marginRight: 10}}
                  />
                )}
              />
            ) : (
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '60%'}}>
                  <Facebook speed={0.5} height={150} />
                </View>
                <View style={{width: '60%', marginLeft: '10%'}}>
                  <Facebook speed={0.5} height={150} />
                </View>
              </View>
            )}
          </FlatListContainer>

          <FlatListContainer style={{marginLeft: '3%'}} title="Top Attractions">
            {!this.state.destinationLoading ? (
              <FlatList
                horizontal
                data={this.state.destinationData}
                keyExtractor={item => item.destination_id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <DestinationCard wholeData={item} id={item.destination_id} imageUrl={item.image} name={item.city.name} followed= {true}/>
                )}
              />
            ) : (
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '60%'}}>
                  <Facebook speed={0.5} height={150} />
                </View>
                <View style={{width: '60%', marginLeft: '10%'}}>
                  <Facebook speed={0.5} height={150} />
                </View>
              </View>
            )}
          </FlatListContainer>
        </View>
      </ScrollView>
    );
  }
}
