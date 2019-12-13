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
import {TextInput} from 'react-native-gesture-handler';
import FlatListContainer from '../components/FlatListContainer';
import {BackgroundColor} from '../assets/Colors/Colors';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard'

const tourz = [1, 2, 3, 4, 5];
const destz = [1,2,3,4,12,13];
const apiUrl= `https://travelog-pk.herokuapp.com/destination/card/`

class SearchBar extends React.PureComponent {
  state = {
    selected: 'destinations',
  };

  renderDestinations = () => {
    return (
        <ScrollView nestedScrollEnabled style={{marginBottom:10}}>
            <FlatList
        veertical
        data={destz}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
        <DestinationCard 
        id={item}
        api = {apiUrl}
        style={{
        width: Dimensions.get('window').width / 1,
        marginBottom: '3%',
        paddingTop:'2%',
        paddingLeft: '1%',
        paddingRight: '4%',
        backgroundColor:"white",
        paddingBottom:"1%"
        }}
        
        imageheight={175}
        iconsize={30}
        textsize={{fontSize:22}}
         />
        }
    />
        </ScrollView>
    )
  };

  renderTours = () => {
    return (
      <ScrollView nestedScrollEnabled style={{}}>
        <FlatList
          data={tourz}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TourCard
              style={{
                borderWidth: 0,
                width: Dimensions.get('window').width / 1,
                marginBottom: '8%',
                paddingLeft: '3%',
                paddingRight: '3%',
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
    return <Text>Operators</Text>;
  };

  changeState = type => {
    this.setState({
      selected: type,
    });
  };

  render() {
    console.log(this.state.selected);
    return (
      <View style={{paddingBottom:"8%",backgroundColor:BackgroundColor}}>
        <View style={styles.container}>
         

          <TouchableWithoutFeedback
            onPress={() => {
              this.changeState('tours');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"center",
                width:"30%",
                borderRightColor: 'gray',
                borderRightWidth: 0.5,
              }}>
              <Icon name="van-passenger" style={styles.iconstyle} />
              <Text
                >
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
                justifyContent:"center",
                width:"34%",
                borderRightColor: 'gray',
                borderRightWidth: 0.5,
              }}>
              <Icon name="shopping" style={styles.iconstyle} />
              <Text >Operators</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              this.changeState('destinations');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"center",
                width:"35%"
              }}>
              <Icon name="map-marker-radius" style={styles.iconstyle} />
              <Text
                >
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
    alignSelf:"center",
    height: 50,
    
    // justifyContent: 'space-between',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    elevation: 3,
    backgroundColor: 'white',
  },
  iconstyle: {
    fontSize: 25,
    // margin: 10,
  },
});

export default SearchBar;
