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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColor} from '../assets/Colors/Colors';
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
      <View style={{flex:1}}>
        
       
            {/* <TouchableOpacity onPress={() => this._signOutAsync()}>
              <IconWithText
                name="phone"
                text="Logout"
                iconstyle={styles.IconStyle}
                textstyle={styles.TextStyle}
                style={styles.Line}
              />
            </TouchableOpacity> */}
<View style={{marginTop:'5%',marginLeft:30}}>
  
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Contact')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="phone"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Contact Us
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=> this.props.navigation.navigate('FAQ')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="comment-question"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    FAQs
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="file-document-outline"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Terms and Conditions
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="help-circle-outline"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Help
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="account-supervisor-circle"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Support
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="security"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Change Password
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._signOutAsync()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                }}>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Icon
                    style={{color: ThemeColor, fontSize: 26, paddingTop: 3}}
                    name="logout"
                  />
                </View>
                <View style={{flex: 12}}>
                  <Text
                    style={{color: '#5c5353', fontSize: 20, marginLeft: 10}}>
                    Logout
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
</View>

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
