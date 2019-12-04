import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Container, Content, List, ListItem, CheckBox} from 'native-base';

export default class FilterComponent extends Component {
  state = {
    check: false,
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
          marginRight: '12%',
          marginBottom: '4%',
        }}>
        <Text style={{color: '#b3b3b5', marginLeft: '1%', fontSize:17}}>
          {this.props.object.value}
        </Text>
        <CheckBox
          checked={this.state.check}
          onPress={() => {
            this.setState(prevState => ({
              check: !prevState.check,
            }));

            if (!this.state.check) {
              this.props.addItem(this.props.object);
            } else {
              this.props.removeItem(this.props.object);
            }
          }}
        />
      </View>
    );
  }
}
