import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class webview extends Component {
  render() {
    return <WebView source={{uri: 'https://reactnative.dev/'}} />;
  }
}
