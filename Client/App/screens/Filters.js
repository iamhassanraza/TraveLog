import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import FilterComponent from '../components/FilterComponent';

export default class Filters extends Component {
  render() {
    return (
      <ScrollView>

<View style={{borderWidth: 1, margin: 15}}>
          <Text style={{marginLeft: '2%', fontSize: 20, fontWeight: 'bold'}}>
            Price
          </Text>
          <FilterComponent text="PKR 15,000+"></FilterComponent>
          <FilterComponent text="PKR 25,000+"></FilterComponent>
          <FilterComponent text="PKR 35,000+"></FilterComponent>
          <FilterComponent text="PKR 45,000+"></FilterComponent>
          <FilterComponent text="PKR 55,000+"></FilterComponent>
        </View>


        <View style={{borderWidth: 1, margin: 15}}>
          <Text style={{marginLeft: '2%', fontSize: 20, fontWeight: 'bold'}}>
            Duration
          </Text>
          <FilterComponent text="2 Days+"></FilterComponent>
          <FilterComponent text="5 Days+"></FilterComponent>
          <FilterComponent text="10 Days+"></FilterComponent>
          <FilterComponent text="15 Days+"></FilterComponent>
          <FilterComponent text="20 Days+"></FilterComponent>
        </View>


        <View style={{borderWidth: 1, margin: 15, borderColor:"grey"}}>
          <Text style={{marginLeft: '2%', fontSize: 20, fontWeight: 'bold'}}>
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

        <View style={{borderWidth: 1, margin: 15}}>
          <Text style={{marginLeft: '2%', fontSize: 20, fontWeight: 'bold'}}>
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

        <View style={{borderWidth: 1, margin: 15}}>
          <Text style={{marginLeft: '2%', fontSize: 20, fontWeight: 'bold'}}>
            Tour Type
          </Text>
          <FilterComponent text="Only for Girls"></FilterComponent>
          <FilterComponent text="For Family"></FilterComponent>
          <FilterComponent text="For Groups"></FilterComponent>
          <FilterComponent text="Only for Boys"></FilterComponent>
          <FilterComponent text="Public"></FilterComponent>
          <FilterComponent text="Private"></FilterComponent>
          
        </View>
      </ScrollView>
    );
  }
}
