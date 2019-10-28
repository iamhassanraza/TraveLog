import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColor} from '../assets/Colors/Colors';

export default class PlanItem extends Component {
  state = {
    expand: false,
  };

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text>
            {this.props.id === 0 ? (
              <MyIcon name="map-marker" color={ThemeColor} size={23}></MyIcon>
            ) : this.props.lastitem ? (
              <MyIcon name="flag-variant" color={ThemeColor} size={23}></MyIcon>
            ) : (
              <MyIcon
                name="circle-outline"
                color={ThemeColor}
                size={23}></MyIcon>
            )}
          </Text>
          {this.props.lastitem ? (
            undefined
          ) : (
            <View
              style={{
                borderWidth: 1,
                flex: 1,
                borderStyle: 'dotted',
                borderRadius: 1,
              }}></View>
          )}
        </View>

        {/*  Text wala part */}

        <View style={{flex: 1}}>
          <View style={{padding: 5}}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState(prevState => ({
                  expand: !prevState.expand,
                }));
              }}>
              <View>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  {this.props.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {this.state.expand ? (
              <View>
                <Text style={{fontWeight: '100', fontSize: 13, lineHeight: 20}}>
                  {this.props.details}
                </Text>
              </View>
            ) : (
              undefined
            )}
          </View>
        </View>
      </View>
    );
  }
}
