

import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback } from 'react-native'
import {Container, Content, List, ListItem, CheckBox} from 'native-base'

export default class Filters extends Component {

    state= {
            check :false
        };

    render()
     {
        
        return (
            
            <View style={{flexDirection:"row", justifyContent:"space-between", margin:5, marginRight:"12%"}}>
               
               <Text> textInComponent </Text>
               
               <CheckBox 
               checked={this.state.check}  
               onPress={() => {
                    this.setState(prevState => ({
                        check: !prevState.check
                        }));
                }} 
                />
              
                
            </View>
        )
    }
}
