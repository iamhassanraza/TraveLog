import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import FilterComponent from '../components/FilterComponent';
import {ThemeColor} from '../assets/Colors/Colors';
import RangeSlider from 'rn-range-slider';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {age: 18};
  }
  getVal(val) {
    console.warn(val);
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: ThemeColor,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Filters
          </Text>
        </View>

        

        <View style={{borderTopWidth:1 , borderBottomWidth:1, height:100}}>
            <Text>Price</Text>
          <RangeSlider
            style={{width: '70%', marginRight: "15%", marginLeft:"15%"}}
            gravity={'center'}
            min={7000}
            max={50000}
            step={500}
            selectionColor={ThemeColor}
            labelBackgroundColor={ThemeColor}
            labelBorderColor={ThemeColor}
            blankColor="#f5eceb"
            onValueChanged={(low, high, fromUser) => {
              this.setState({rangeLow: low, rangeHigh: high});
            }}
          />
        </View>

        <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
          <Text
            style={{
              marginLeft: '2%',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}>
            Price
          </Text>
          <FilterComponent text="PKR 15,000+"></FilterComponent>
          <FilterComponent text="PKR 25,000+"></FilterComponent>
          <FilterComponent text="PKR 35,000+"></FilterComponent>
          <FilterComponent text="PKR 45,000+"></FilterComponent>
          <FilterComponent text="PKR 55,000+"></FilterComponent>
        </View>

        <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
          <Text
            style={{
              marginLeft: '2%',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}>
            Duration
          </Text>
          <FilterComponent text="2 Days+"></FilterComponent>
          <FilterComponent text="5 Days+"></FilterComponent>
          <FilterComponent text="10 Days+"></FilterComponent>
          <FilterComponent text="15 Days+"></FilterComponent>
          <FilterComponent text="20 Days+"></FilterComponent>
        </View>

        <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
          <Text
            style={{
              marginLeft: '2%',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}>
            Departure Date
          </Text>
          <FilterComponent text="Jan 2019"></FilterComponent>
          <FilterComponent text="Feb 2019"></FilterComponent>
          <FilterComponent text="March 2019"></FilterComponent>
          <FilterComponent text="April 2019"></FilterComponent>
          <FilterComponent text="May 2019"></FilterComponent>
          <FilterComponent text="June 2019"></FilterComponent>
          <FilterComponent text="July 2019"></FilterComponent>
          <FilterComponent text="Aug 2019"></FilterComponent>
        </View>

        <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
          <Text
            style={{
              marginLeft: '2%',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}>
            Destination
          </Text>
          <FilterComponent text="Hunza"></FilterComponent>
          <FilterComponent text="Skardu"></FilterComponent>
          <FilterComponent text="Naran"></FilterComponent>
          <FilterComponent text="Kaghan"></FilterComponent>
          <FilterComponent text="Kashmir"></FilterComponent>
          <FilterComponent text="Sawat"></FilterComponent>
          <FilterComponent text="Sindh"></FilterComponent>
          <FilterComponent text="Balochistan"></FilterComponent>
        </View>

        <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
          <Text
            style={{
              marginLeft: '2%',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}>
            Tour Type
          </Text>
          <FilterComponent text="Only for Girls"></FilterComponent>
          <FilterComponent text="For Family"></FilterComponent>
          <FilterComponent text="For Groups"></FilterComponent>
          <FilterComponent text="Only for Boys"></FilterComponent>
          <FilterComponent text="Public"></FilterComponent>
          <FilterComponent text="Private"></FilterComponent>
        </View>

        <Button title="Apply Filters"></Button>
      </ScrollView>
    );
  }
}
