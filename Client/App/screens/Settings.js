import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IconWithText from '../components/IconAndText';
import head from '../assets/images/blueHead.png';
import AsyncStorage from '@react-native-community/async-storage';


export default class Settings extends Component {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
    console.log('Logged Out');
  };

  render() {
    console.log(this.props.navigation);
    return (
      <View>
        <ImageBackground
          source={head}
          style={{
            height: '60%',
            width: '100%',
          }}>
          <View style={{marginLeft: '8%', paddingTop: '30%'}}>
            <TouchableOpacity onPress={() => this._signOutAsync()}>
              <IconWithText
                name="phone"
                text="Logout"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>
{/* 
            <TouchableOpacity
              style={{borderWidth: 1}}
              onPress={() => alert('ha')}>
              <IconWithText
                name="comment-question-outline"
                text="FAQs"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('ha')}>
              <IconWithText
                name="file-document-outline"
                text="Terms & Conditions"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('hasa')}>
              <IconWithText
                name="help-circle-outline"
                text="Help"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('ha')}>
              <IconWithText
                name="account-supervisor-circle"
                text="Support"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('ha')}>
              <IconWithText
                name="security"
                text="Change Password"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('ha')}>
              <IconWithText
                name="logout"
                text="Logout"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}></IconWithText>
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IconStyle: {
    fontSize: 26,
    paddingTop: 3,
  },
  TextStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
  Line: {
    marginTop: 15,
  },
});
