import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class webview extends Component {
  render() {
    return <WebView 
    userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
    source={{uri: 'https://travelog-pk.herokuapp.com/auth/google'}} />;
  }
}
