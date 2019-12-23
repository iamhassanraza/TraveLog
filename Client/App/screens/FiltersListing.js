import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ScrollView,
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
  };

  renderDestinations = () => {
    return (
      <ScrollView nestedScrollEnabled style={{marginBottom: 10}}>
        <FlatList
          vertical
          data={destz}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <DestinationCard
              id={item}
              api={apiUrl}
              style={{
                width: Dimensions.get('window').width / 1,
                marginBottom: '3%',
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
    return (
      <ScrollView nestedScrollEnabled style={{marginBottom: '-34%'}}>
        <FlatList
          data={tourz}
          showsHorizontalScrollIndicator={false}
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
              id={item}
              seatsLeft={10}></TourCard>
          )}
          keyExtractor={item => item}
        />
      </ScrollView>
    );
  };

  renderOperators = () => {
    return (
      <ScrollView nestedScrollEnabled style={{}}>
        <FlatList
          vertical
          data={operators}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <OperatorCard
              operatorId={item}
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
    console.log(this.state.selected);
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
                    ? 'rgba(19, 135, 210,0.8)'
                    : null,
                width: '25%',
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor:'rgba(19, 135, 210,0.8)'
              }}>
              <Icon
                name="van-passenger"
                style={{
                  fontSize: 20,
                  paddingRight: 3,
                  color: this.state.selected === 'tours' ? 'white' : 'rgba(19, 135, 210,0.8)',
                }}
              />
              <Text
                style={{
                  color: this.state.selected === 'tours' ? 'white' : 'rgba(19, 135, 210,0.8)',
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
                  this.state.selected === 'operators' ? 'rgba(19, 135, 210,0.8)' : null,
                justifyContent: 'center',
                width: '34%',
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor:ThemeGrey
              }}>
              <Icon name="shopping" style={{fontSize: 18, paddingRight: 3,
              color: this.state.selected === 'operators' ? 'white' : ThemeGrey,}} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color:
                    this.state.selected === 'operators' ? 'white' : ThemeGrey,
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
                  this.state.selected === 'destinations' ? 'rgba(19, 135, 210,0.8)' : null,
                alignItems: 'center',
                justifyContent: 'center',
                width: '35%',
                borderWidth: 0.5,
                borderRadius: 30,
                borderColor:ThemeGrey
              }}>
              <Icon
                name="map-marker-radius"
                style={{fontSize: 18, paddingRight: 3}}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color:
                    this.state.selected === 'destinations'
                      ? 'white'
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
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom:10,
    paddingBottom:10,

    justifyContent: 'space-between',
  },
  iconstyle: {
    fontSize: 25,
    // margin: 10,
  },
});

export default SearchBar;