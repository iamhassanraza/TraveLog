import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeColor, BackgroundColor} from '../assets/Colors/Colors';
import LoadingIndicator from './LoadingIndicator';
import {withNavigation} from 'react-navigation';


// Props : id, API

class DestinationCard extends React.Component {
  state = {
    data: [],
    saved: this.props.saved,
  };

  componentDidMount() {
    fetch(this.props.api + `${this.props.id}`)
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

  render() {
 
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.push('DestinationDetails', {
              DestinationData: this.props.wholeData,
              // AttractionCardIds: this.state.data[1],
            })
          }>
          <View
            style={{
              width: Dimensions.get('window').width / 2.6,
              margin: 5, ...this.props.style
            }}>
            <View>
              <Image
                source={{
                  uri: `https://c7.uihere.com/files/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg`,
                }}
                style={{
                  width: '100%',
                  height: this.props.imageheight ? this.props.imageheight : 200,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  ...this.props.imageheight
                }}></Image>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '2%',
              }}>
              <View style={{width: '80%'}}>
                <Text style={{fontSize: 16,...this.props.textsize}}>{this.props.name}</Text>
              </View>
              <View style={{marginRight: '3%'}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setState(prevState => ({
                      saved: !prevState.saved,
                    }));
                  }}>
                  <Icon
                    name={this.state.saved ? 'bookmark' : 'bookmark-o'}
                    size={this.props.iconsize ? this.props.iconsize : 23}
                    color={ThemeColor}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }


export default withNavigation(DestinationCard);
