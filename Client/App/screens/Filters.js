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
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"Jan 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"Feb 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"March 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"April 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"May 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"June 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"July 2019"}} ></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Date" , value:"Aug 2019"}} ></FilterComponent>
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
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Hunza"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Skardu"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Naran"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Kaghan"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Kashmir"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Sawat"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Sindh"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Destination" , value:"Balochistan"}}></FilterComponent>
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
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"Only for Girls"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"For Family"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"For Groups"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"Only for Boys"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"Public"}}></FilterComponent>
          <FilterComponent addItem={this.addItem} removeItem={this.removeItem} object={{key:"Speciality" , value:"Private"}}></FilterComponent>
        </View>

        <Button title="Apply Filters"></Button>
      </ScrollView>
    );
  }
}
