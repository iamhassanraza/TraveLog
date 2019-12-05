import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import FilterComponent from '../components/FilterComponent';
import {ThemeColor} from '../assets/Colors/Colors';
import RangeSlider from 'rn-range-slider';
import DatePicker from 'react-native-datepicker';
import {Container, Header, Content, Form, Item, Picker} from 'native-base';

const textcolor = '#b3b3b5';

export default class Filters extends Component {
  state = {
    rangeLowPrice: 7000,
    rangeHighPrice: 50000,
    Days: 2,
    Filters: [],
    date: '2019-01-04',
    selected2: undefined,
  };

  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }

  addItem = filterName => {
    var index = this.state.Filters.findIndex(x => x.value == filterName.value);
    if (index === -1) {
      this.setState(prevState => ({
        Filters: [...prevState.Filters, filterName],
      }));
    }
  };

  removeItem = filterName => {
    var index = this.state.Filters.findIndex(x => x.value == filterName.value);
    if (index != -1) {
      this.setState(prevState => ({
        Filters: prevState.Filters.filter(x => x.value != filterName.value),
      }));
    }
  };

  renderTop = () => {
    return (
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
    );
  };

  renderPrice = () => {
    return (
      <View style={{width: '80%', alignSelf: 'center', borderRadius: 5}}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color: '#b3b3b5',
          }}>
          Price
        </Text>

        <View style={{borderWidth: 1, borderColor: textcolor}}>
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
              blankColor="#272729"
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
              marginBottom: '1%',
            }}>
            <Text>PKR {this.state.rangeLowPrice}</Text>
            <Text>PKR {this.state.rangeHighPrice}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderDays = () => {
    return (
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 5,
          marginLeft: '4%',
        }}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '1%',
            color: textcolor,
          }}>
          Duration
        </Text>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: textcolor,
            paddingTop: '3%',
          }}>
          <View style={{marginRight: 5, alignItems: 'center'}}>
            <RangeSlider
              style={{width: '95%', height: 55, marginTop: '-25%'}}
              gravity={'center'}
              min={1}
              max={25}
              step={1}
              rangeEnabled={false}
              selectionColor={ThemeColor}
              labelBackgroundColor={ThemeColor}
              labelBorderColor={ThemeColor}
              blankColor={textcolor}
              onValueChanged={(low, high, fromUser) => {
                this.setState({Days: low});
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '4%',
            }}>
            <Text>{this.state.Days} Days</Text>
          </View>
        </View>
      </View>
    );
  };

  renderDepartureDate = () => {
    return (
      <View style={{alignSelf: 'center', marginRight: '5%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '1%',
            color: textcolor,
            alignSelf: 'center',
          }}>
          Departure Date
        </Text>

        <View>
          <DatePicker
            style={{width: '95%'}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-05-04"
            maxDate="2022-05-04"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 5,
              },
              dateInput: {
                paddingLeft: 28,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({date: date});
            }}
          />
        </View>
      </View>
    );
  };

  renderDestination = () => {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{width: '90%', alignSelf: 'center'}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  };

  renderSpeciality = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          margin: 15,
          borderColor: 'white',
          backgroundColor: '#1F1F21',
        }}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Tour Type
        </Text>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{
            key: 'Speciality',
            value: 'Only for Girls',
          }}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Speciality', value: 'For Family'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Speciality', value: 'For Groups'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{
            key: 'Speciality',
            value: 'Only for Boys',
          }}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Speciality', value: 'Public'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Speciality', value: 'Private'}}></FilterComponent>
      </View>
    );
  };

  render() {
    console.log(this.state.Filters);
    return (
      <ScrollView style={{backgroundColor: '#white'}}>
        {this.renderTop()}
        {this.renderPrice()}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {this.renderDays()}
          {this.renderDepartureDate()}
        </View>
        {this.renderDestination()}
        {this.renderSpeciality()}
        <Button title="Apply Filters"></Button>
      </ScrollView>
    );
  }
}
