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
import {BackgroundColor} from '../assets/Colors/Colors';
import TourCard from '../components/TourCard';
import ContentLoader, {Facebook} from 'react-content-loader/native';

class AllTours extends React.PureComponent {
  state = {
    tourData: [],
    toursLoading: false,
  };

  componentDidMount() {
    this.setState({toursLoading: true});
    this.fetchTours();
  }

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

  renderTours = () => {
    return (
      <FlatList
        data={this.state.tourData}
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
    );
  };

  render() {
    return (
      <View style={{backgroundColor: BackgroundColor}}>
        {this.state.toursLoading ? (
          <View style={{}}>
            <View style={{width: '60%'}}>
              <Facebook speed={0.5} height={150} />
            </View>
            <View style={{width: '60%'}}>
              <Facebook speed={2} height={150} />
            </View>
            <View style={{width: '60%'}}>
              <Facebook speed={0.5} height={150} />
            </View>
          </View>
        ) : (
          this.renderTours()
        )}
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

export default AllTours;
