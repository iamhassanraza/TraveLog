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
import OperatorCard from '../components/OperatorCard';
import ContentLoader, {Facebook} from 'react-content-loader/native';

class AllOperators extends React.PureComponent {
  state = {
    operatorsData: [],
    operatorsLoading: false,
  };

  componentDidMount() {
    this.setState({operatorsLoading: true});
    this.fetchOperators();
  }

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

  renderOperators = () => {
    return (
      <FlatList
        vertical
        data={this.state.operatorsData}
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
    );
  };

  render() {
    return (
      <View style={{backgroundColor: BackgroundColor}}>
        {this.state.operatorsLoading ? (
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
          this.renderOperators()
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

export default AllOperators;
