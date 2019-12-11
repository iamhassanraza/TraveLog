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
    if (this.state.data[0]) {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.push('AttractionDetails', {
              AttractionData: this.state.data[0],
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
                  uri: `https://travelog-pk.herokuapp.com/images/${this.state.data[0].image_path}`,
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
                <Text style={{fontSize: 16}}>{this.state.data[0].name}</Text>
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
                    size={23}
                    color={ThemeColor}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <View style={{borderWidth: 0, backgroundColor: BackgroundColor, padding: 5}}>
          <Facebook speed={0.5}/>
        </View>
      );
    }
  }
}

export default withNavigation(AttractionCard);
