import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'native-base';

// PROPS : bgclr, FontColor TourType

export default class TypeButtonFilters extends Component {
  state = {
    check: false,
  };

  render() {
    return (
      <TouchableWithoutFeedback
        // onPress={() => {
        //   this.setState(prevState => ({
        //     check: !prevState.check,
        //   }));

        //   if (!this.state.check) {
        //     this.props.addItem(this.props.object);
        //   } else {
        //     this.props.removeItem(this.props.object);
        //   }
        // }}
        >
        <View>
          <Button
          onPress={() => {
            this.props.onSelect(this.props.TourType)
          }}
            bordered
            style={{
              width: 100,
              margin: 5,
              justifyContent: 'center',
              backgroundColor: this.props.style.backgroundColor,
              borderRadius:20
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: this.props.style.color,
              }}>
              {this.props.TourType}
            </Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
