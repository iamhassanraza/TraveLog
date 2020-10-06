import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackgroundColor} from '../assets/Colors/Colors';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard';
import OperatorCard from '../components/OperatorCard';
import {ThemeColor, ThemeGrey} from '../assets/Colors/Colors';

const tourz = [1, 2, 1, 2, 3, 4, 5];
const destz = [1, 2, 3, 4, 5, 6, 12, 13, 1, 2, 3];
const operators = [1, 2, 1, 2, 2, 1];
const apiUrl = `https://travelog-pk.herokuapp.com/destination/card/`;

class SearchBar extends React.PureComponent {
  state = {
    selected: 'operators',
    savedTours: [],
    savedOperators:[],
    destinationData:[]
  };

  componentDidMount() {
    this.fetchSavedTours();
    this.fetchSavedOperators();
    this.fetchSavedDestinations();

    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      // The screen is focused
      this.fetchSavedTours();
      this.fetchSavedOperators();
      this.fetchSavedDestinations();
    });
  }

  fetchSavedOperators = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(User.id, "USER ID")
    fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/following/users?user_id=${User.id}`,
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
        console.log(responseJson, 'OPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
        this.setState({
          refreshing: false,
          savedOperators: responseJson,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };


  fetchSavedTours = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(User.token, 'TOKENNNNNNNNNNN');
    fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/fetch/saved/posts?page=${
        this.state.pageNo
      }&user_id=${User.id}`,
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
        console.log(responseJson, 'OPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
        this.setState({
          refreshing: false,
          savedTours: responseJson,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

 
  fetchSavedDestinations = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
 
    fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/get/followed/destinations`,
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
        console.log(responseJson, 'OPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
        this.setState({
          refreshing: false,
          destinationData: responseJson,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

  renderDestinations = () => {
    return (
      <ScrollView nestedScrollEnabled style={{marginBottom: 10}}>
        <FlatList
          vertical
          data={this.state.destinationData}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <DestinationCard
            wholeData={item} id={item.destination_id} imageUrl={item.image} name={item.city.name} followed= {item.followstatus.length > 0 ? true : false}
              style={{
                width: Dimensions.get('window').width / 1,
                marginBottom: '2%',
                paddingTop: '2%',
                paddingLeft: '1%',
                paddingRight: '4%',
                backgroundColor: 'white',
                paddingBottom: '1%',
              }}
              imageheight={175}
              iconsize={30}
              textsize={{fontSize: 22}}
            />
          )}
        />
      </ScrollView>
    );
  };

  renderTours = () => {
    return this.state.savedTours.data.length > 0 ? (
      <ScrollView nestedScrollEnabled style={{marginBottom: '-34%'}}>
        <FlatList
          data={this.state.savedTours.data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TourCard
              style={{
                width: Dimensions.get('window').width / 1,
                marginBottom: '3%',
                paddingTop: '2%',
                paddingLeft: '2%',
                paddingRight: '2%',
                backgroundColor: 'white',
                paddingBottom: '1%',
              }}
              id={item.id}
              seatsLeft={10}
              title={item.title}
              price={item.price}
              departure_date={item.departure_date}
              number_of_days={item.number_of_days}
              speciality={item.speciality}
              operator={item.users.first_name + ' ' + item.users.last_name}
              photoUrl={item.postDetail[0].image_url}
              wholeData={item}
              saved={item.userSavedPost.length > 0 ? true : false}
            />
          )}
          keyExtractor={item => item}
        />
      </ScrollView>
    ) : (
      <Text>You Don't Have Any Followed Tours</Text>
    );
  };

  renderOperators = () => {
    return (
      <ScrollView nestedScrollEnabled style={{}}>
        <FlatList
          vertical
          data={this.state.savedOperators}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <OperatorCard
            id={item.id}
            first_name={item.first_name}
            email={item.email}
            profile_pic_url={item.profile_pic_url}
            contact_no={item.contact_no}
            address={item.major}
            followStatus={item.userFollowing.length === 0 ? false : true}
            data={item}
              style={{
                width: Dimensions.get('window').width / 1,
                marginBottom: '3%',
                paddingTop: '2%',
                paddingLeft: '2%',
                paddingRight: '2%',
                backgroundColor: 'white',
                paddingBottom: '1%',
              }}
            />
          )}
        />
      </ScrollView>
    );
  };

  changeState = type => {
    this.setState({
      selected: type,
    });
  };

  render() {
    console.log(this.state.selected, this.state.savedOperators);
    return (
      <View style={{paddingBottom: '8%', backgroundColor: BackgroundColor}}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.changeState('tours');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  this.state.selected === 'tours'
                    ? 'rgba(19, 135, 210,0.2)'
                    : null,
                width: '25%',
                borderWidth: 0.5,
                borderRadius: 30,
                borderWidth: this.state.selected === 'tours' ? 0 : 0.5,
                borderColor: ThemeGrey,
              }}>
              <Icon
                name="van-passenger"
                style={{
                  fontSize: 20,
                  paddingRight: 3,
                  color:
                    this.state.selected === 'tours' ? ThemeColor : ThemeGrey,
                }}
              />
              <Text
                style={{
                  color:
                    this.state.selected === 'tours' ? ThemeColor : ThemeGrey,
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Tours
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              this.changeState('operators');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor:
                  this.state.selected === 'operators'
                    ? 'rgba(19, 135, 210,0.2)'
                    : null,
                justifyContent: 'center',
                width: '34%',
                borderWidth: 0.5,
                borderRadius: 30,
                borderWidth: this.state.selected === 'operators' ? 0 : 0.5,
                borderColor: ThemeGrey,
              }}>
              <Icon
                name="shopping"
                style={{
                  fontSize: 18,
                  paddingRight: 3,
                  color:
                    this.state.selected === 'operators'
                      ? ThemeColor
                      : ThemeGrey,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color:
                    this.state.selected === 'operators'
                      ? ThemeColor
                      : ThemeGrey,
                }}>
                Operators
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              this.changeState('destinations');
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor:
                  this.state.selected === 'destinations'
                    ? 'rgba(19, 135, 210,0.2)'
                    : null,
                alignItems: 'center',
                justifyContent: 'center',
                width: '35%',
                borderWidth: this.state.selected === 'destinations' ? 0 : 0.5,
                borderRadius: 30,
                borderColor: ThemeGrey,
              }}>
              <Icon
                name="map-marker-radius"
                style={{
                  fontSize: 18,
                  paddingRight: 3,
                  color:
                    this.state.selected === 'destinations'
                      ? ThemeColor
                      : ThemeGrey,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color:
                    this.state.selected === 'destinations'
                      ? ThemeColor
                      : ThemeGrey,
                }}>
                Destinations
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.state.selected === 'destinations'
          ? this.renderDestinations()
          : null}
        {this.state.selected === 'tours' ? this.renderTours() : null}
        {this.state.selected === 'operators' ? this.renderOperators() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
    paddingBottom: 10,
    paddingTop: 10,

    justifyContent: 'space-between',
  },
  iconstyle: {
    fontSize: 25,
    // margin: 10,
  },
});

export default SearchBar;
