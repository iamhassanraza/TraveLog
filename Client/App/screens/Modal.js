import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {ThemeColor} from '../assets/Colors/Colors';
import Modal from 'react-native-modal';
import {CheckBox} from 'react-native-elements';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class ModalTester extends Component {
  state = {
    isModalVisible: true
   
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}>
          <View style={{flex: 1}}>
            <Text style={{color: 'white'}}>Hello!</Text>

           
              
            <Text onPress={()=> alert('For Family')} style={{color:"white", fontSize:17,paddingBottom:'3%'}} > For Family</Text>





            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
