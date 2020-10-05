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
import ContentLoader, { Facebook } from 'react-content-loader/native'


// Props : id , API

class AttractionCard extends React.Component {
  state = {
    data: [],
    saved: false,
  };

  componentDidMount() {
    
  }

  render() {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.push('AttractionDetails', {
               AttractionData: this.props.wholeData,
               city: this.props.city
            })
          }>
          <View
            style={{
              width: Dimensions.get('window').width / 2.6,
              margin: 5,
            }}>
            <View>
              <Image
                source={{
                  uri: this.props.imageUrl ? this.props.imageUrl : `https://img.pngio.com/computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-user-login-png-728_512.jpg`,
                }}
                style={{
                  width: '100%',
                  height: 200,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                }}></Image>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '2%',
              }}>
              <View style={{width: '80%'}}>
                <Text style={{fontSize: 16}}>{this.props.name}</Text>
              </View>
              {/* <View style={{marginRight: '3%'}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setState(prevState => ({
                      saved: !prevState.saved,
                    }));
                  }}>
                  <Icon
                    name={this.state.saved ? 'bookmark' : 'bookmark-o'}
                    size={23}
                    color={ThemeColor}
                  />
                </TouchableWithoutFeedback>
              </View> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    
  }
}

export default withNavigation(AttractionCard);
