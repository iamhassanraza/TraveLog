import React, {Component} from 'react';
import {Text, View,TouchableWithoutFeedback} from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColor} from '../assets/Colors/Colors';


const details =
  "We will pick you from your hotel and drive you to the airport in Kathmandu. A quick, 25-30-minute flight from Kathmandu will take you to Lukla (2,840m), the gateway to the Khumbu region and the starting point of this trek. Travel through the Dudhkoshi River Valley, past various settlements such as Chheplung and Chaurikharka, before reaching Phakding. Enjoy great views of the Himalayas during the trek. It's a leisurely day with a gradual descend of approximately 200 meters.";

export default class PlanItem extends Component {
  state = {
    expand: false,
  };

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1,}}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text>
          {this.props.id === 0 ? (<MyIcon name="map-marker" color={ThemeColor} size={23}></MyIcon>) : (  <MyIcon name="circle-outline" color={ThemeColor} size={23}></MyIcon>) }
          </Text>
          <View
            style={{
              borderWidth: 1,
              flex: 1,
              borderStyle: 'dotted',
              borderRadius: 1,
            }}></View>
        </View>

        {/*  Text wala part */}

        <View style={{flex: 1, borderWidth: 1}}>
          <View style={{padding: 5}}>
            <TouchableWithoutFeedback onPress={()=>{
                this.setState((prevState) => ({
                    expand: !prevState.expand
                  }));
            }}>

            
            <View>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Day 1: Kathmandu to Lukla (flight)
              </Text>
            </View>
            </TouchableWithoutFeedback>
            
            {this.state.expand ? (<View>
              <Text style={{fontWeight: '100', fontSize: 13, lineHeight: 20}}>
                {details}
              </Text>
            </View>) : undefined}
            
          </View>
        </View>
      </View>
    );
  }
}
