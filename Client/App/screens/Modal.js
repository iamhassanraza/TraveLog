import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback,
  Button,
  StyleSheet
} from 'react-native';
import {ThemeColor} from '../assets/Colors/Colors';
import Modal from 'react-native-modal';

export default class ModalTester extends Component {
  state = {
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1, }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{color: 'white'}}>Hello!</Text>
            <Text
              onPress={() => alert('For Boys')}
              style={styles.TextWithNavigation}>
              For Boys
            </Text>

            <Text
              onPress={() => alert('For Family')}
              style={styles.TextWithNavigation}>
              For Family
            </Text>

            <Text
              onPress={() => alert('For Girls')}
              style={styles.TextWithNavigation}>
              For Girls
            </Text>

            <Text onPress={() => alert('For Honeymoon')} style={styles.TextWithNavigation}>
              Honeymoon Trips
            </Text>

            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextWithNavigation: {
    color: 'white',
    fontSize: 17,
    margin: 1,
    paddingLeft: '4%',
    backgroundColor: ThemeColor,
    padding:"3%"
  },
});
