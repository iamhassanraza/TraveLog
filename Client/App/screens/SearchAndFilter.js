import React, {Component} from 'react';
import { View, TouchableWithoutFeedback} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import {ThemeColor} from '../assets/Colors/Colors';

export default class SearchAndFilter extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
    console.log(search);
  };
 
  render() {
    const {search} = this.state;

    return (
        <View >
      <View style={{width:"80%"}}>
      <SearchBar
      containerStyle={{backgroundColor:ThemeColor}}
      lightTheme
      noIcon
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
   
        <Text>
            asas
        </Text>
{/* 
        <Header searchBar rounded style={{backgroundColor:ThemeColor}}>
          <Item 
           onChangeText={this.updateSearch}
           value={search}
          >
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
            <Icon name="ios-people"  onPress={() => {
                                        alert("Go to Filters");
                                        console.log(search)
                                    }}/>
          
          </Item>
          
        </Header> */}
    
    </View>
    );
  }
}
