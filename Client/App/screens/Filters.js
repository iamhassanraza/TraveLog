import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import FilterComponent from '../components/FilterComponent';
import {ThemeColor} from '../assets/Colors/Colors';
import RangeSlider from 'rn-range-slider';

export default class Filters extends Component {
  state = {
    rangeLowPrice: 7000,
    rangeHighPrice: 50000,
    rangeLowDuration: 1,
    rangeHighDuration: 25,
    Filters : [ ]
  };

addItem = (filterName) => {
    var index = this.state.Filters.findIndex(x => x.value == filterName.value)
    if (index === -1) {
      this.setState(prevState => ({
        Filters : [...prevState.Filters , filterName]
      }));
    }
  }

  removeItem = (filterName) => {
    var index = this.state.Filters.findIndex(x => x.value == filterName.value)
    if (index != -1) {
      this.setState(prevState => ({
        Filters : prevState.Filters.filter(x => x.value  != filterName.value)
      }));
    }
  }
  

 

  render() {
    console.log(this.state.Filters);
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

          <View style={{marginRight: 20, alignItems: 'center'}}>
            <RangeSlider
              style={{width: '70%', height: 80, marginTop: '-15%'}}
              gravity={'center'}
              min={7000}
              max={50000}
              step={1000}
              selectionColor={ThemeColor}
              labelBackgroundColor={ThemeColor}
              labelBorderColor={ThemeColor}
              blankColor="#f5eceb"
              onValueChanged={(low, high, fromUser) => {
                this.setState({rangeLowPrice: low, rangeHighPrice: high});
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: '10%',
              marginRight: '10%',
              marginBottom: '3%',
            }}>
            <Text>PKR {this.state.rangeLowPrice}</Text>
            <Text>PKR {this.state.rangeHighPrice}</Text>
          </View>
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
          <View style={{marginRight: 20, alignItems: 'center'}}>
            <RangeSlider
              style={{width: '70%', height: 80, marginTop: '-15%'}}
              gravity={'center'}
              min={1}
              max={25}
              step={1}
              selectionColor={ThemeColor}
              labelBackgroundColor={ThemeColor}
              labelBorderColor={ThemeColor}
              blankColor="#f5eceb"
              onValueChanged={(low, high, fromUser) => {
                this.setState({rangeLowDuration: low, rangeHighDuration: high});
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: '10%',
              marginRight: '10%',
              marginBottom: '3%',
            }}>
            <Text>{this.state.rangeLowDuration} Days</Text>
            <Text>{this.state.rangeHighDuration} Days</Text>
          </View>
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
          <FilterComponent FiltersStateManipulator={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"Jan 2019"}} ></FilterComponent>
          {/* <FilterComponent text="Feb 2019"></FilterComponent>
          <FilterComponent text="March 2019"></FilterComponent>
          <FilterComponent text="April 2019"></FilterComponent>
          <FilterComponent text="May 2019"></FilterComponent>
          <FilterComponent text="June 2019"></FilterComponent>
          <FilterComponent text="July 2019"></FilterComponent>
          <FilterComponent text="Aug 2019"></FilterComponent> */}
        </View>

        {/* <View style={{borderWidth: 1, margin: 15, borderColor: 'grey'}}>
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
        </View> */}

        <Button title="Apply Filters"></Button>
      </ScrollView>
    );
  }
}
