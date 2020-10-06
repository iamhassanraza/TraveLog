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
import DestinationCard from '../components/DestinationCard';
import ContentLoader, {Facebook} from 'react-content-loader/native';

class AllDestinations extends React.PureComponent {
  state = {
    destinationData: [],
    destinationLoading: false,
  };

  componentDidMount() {
    this.setState({destinationLoading: true});
    this.fetchDestinations();
  }

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

  renderDestination = () => {
    return (
      <FlatList
        vertical
        data={this.state.destinationData}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <DestinationCard
            style={{
              width: Dimensions.get('window').width / 1,
              marginBottom: '1%',
              paddingTop: '2%',
              paddingLeft: '1%',
              paddingRight: '4%',
              backgroundColor: 'white',
              paddingBottom: '1%',
            }}
            imageheight={175}
            iconsize={30}
            textsize={{fontSize: 22}}
            wholeData={item}
            id={item.destination_id}
            imageUrl={item.image}
            name={item.city.name}
            followed= {item.followstatus.length > 0 ? true : false}
          />
        )}
      />
    );
  };

  render() {
    return (
      <View style={{backgroundColor: BackgroundColor}}>
        {this.state.destinationLoading ? (
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
          this.renderDestination()
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

export default AllDestinations;
