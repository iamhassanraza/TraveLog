import React, {Component} from 'react';
import {Text, View, ScrollView, Picker, StyleSheet} from 'react-native';
import FilterComponent from '../components/FilterComponent';
import {ThemeColor} from '../assets/Colors/Colors';
import RangeSlider from 'rn-range-slider';
import DatePicker from 'react-native-datepicker';
import {Button} from 'native-base';
import TypeButtonFilters from '../components/TypeButtonFilters';

const textcolor = '#b3b3b5';

export default class Filters extends Component {
  state = {
    rangeLowPrice: 7000,
    rangeHighPrice: 50000,
    Days: 0,
    Filters: [],
    date: '2019-01-04',

    ali: false,
  };

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
      <View style={{width: '100%', alignSelf: 'center',paddingTop:20}}>
        <Text
          style={{
            marginLeft:18,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color: ThemeColor,
           
          }}>
          Price
        </Text>

        <View style={{}}>
          <View style={{marginRight: 1, alignItems: 'center'}}>
            <RangeSlider
              style={{width: '80%', height: 80, marginTop: '-13%'}}
              gravity={'center'}
              min={7000}
              max={50000}
              step={1000}
              selectionColor={ThemeColor}
              labelBackgroundColor={ThemeColor}
              labelBorderColor={ThemeColor}
              blankColor={textcolor}
              onValueChanged={(low, high, fromUser) => {
                this.setState({rangeLowPrice: low, rangeHighPrice: high});
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: '5%',
              marginRight: '5%',
              marginBottom: '1%',
          
            }}>
            <Text style={{color:textcolor}}>PKR {this.state.rangeLowPrice}</Text>
            <Text style={{color:textcolor}}>PKR {this.state.rangeHighPrice}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderDays = () => {
    return (
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          paddingTop:20
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '1%',
            color: ThemeColor,
            marginLeft:18
          }}>
          Duration
        </Text>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            borderColor: textcolor,
            paddingTop: '9%',
          }}>
          <View style={{marginRight: 5, alignItems: 'center'}}>
            <RangeSlider
              style={{
                width: '80%',
                height: 55,
                marginTop: '-19%',
                marginLeft: '3%',
              }}
              gravity={'center'}
              min={0}
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
              marginBottom: '8%',
            }}>
            <Text style={{color:textcolor}}>{this.state.Days} Days</Text>
          </View>
        </View>
      </View>
    );
  };

  renderDepartureDate = () => {
    return (
      <View >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '1%',
            color: ThemeColor,
            marginLeft:18
          }}>
          Departure Date
        </Text>

        <View>
          <DatePicker
            style={{width: '60%', justifyContent:"center", alignSelf:"center"}}
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
                
              },
              dateInput: {
                paddingLeft: 2,
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
      <View style={{borderWidth:1, width:'100%', alignSelf:"center", borderColor:textcolor}}>
        <Text
          style={{
            marginLeft:18,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color: ThemeColor,
            paddingTop:10
           
          }}>
          Select Destination
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{width: '90%', alignSelf: 'center', color:ThemeColor}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Hunza" value="java" />
          <Picker.Item label="Kashmir" value="js" />
          <Picker.Item label="Mansehra" value="Mansehra" />
          <Picker.Item label="Gilgit" value="" />
          <Picker.Item label="Skardu" value="Skardu" />
          <Picker.Item label="Chitral" value="Chitral" />
          <Picker.Item label="Swat" value="Swat" />
          <Picker.Item label="Abbottabad" value="Abbottabad" />
          <Picker.Item label="Faisalabad" value="Faisalabad" />
          <Picker.Item label="Islamabad" value="Islamabad" />
          <Picker.Item label="Lahore" value="Lahore" />
          <Picker.Item label="Multan" value="Multan" />
          <Picker.Item label="Karachi" value="Karachi" />
          
    
        </Picker>
      </View>
    );
  };

  renderSpeciality = () => {
    return (
      <View style={{marginBottom:20, marginTop:20}}>
        <Text
          style={{
            marginLeft:18,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color: ThemeColor,
            marginBottom:13
           
          }}>
          Select Speciality
        </Text>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TypeButtonFilters
            TourType="Only Family"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}
            object={{
              key: 'Speciality',
              value: 'For Family',
            }}></TypeButtonFilters>

          <TypeButtonFilters
            TourType="Only Boys"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}></TypeButtonFilters>

          <TypeButtonFilters
            TourType="Only Girls"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}></TypeButtonFilters>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TypeButtonFilters
            TourType="Friends"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}></TypeButtonFilters>

          <TypeButtonFilters
            TourType="Honeymoon"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}></TypeButtonFilters>

          <TypeButtonFilters
            TourType="Public"
            style={{
              color: this.state.ali ? 'white' : ThemeColor,
              backgroundColor: this.state.ali ? ThemeColor : '#ebf3fa',
            }}></TypeButtonFilters>
        </View>
      </View>

      // <View
      //   style={{
      //     borderWidth: 1,
      //     margin: 15,
      //     borderColor: 'white',
      //     backgroundColor: '#1F1F21',
      //   }}>
      //   <Text
      //     style={{
      //       marginLeft: '2%',
      //       fontSize: 20,
      //       fontWeight: 'bold',
      //     }}>
      //     Tour Type
      //   </Text>

      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{
      //       key: 'Speciality',
      //       value: 'Only for Girls',
      //     }}></FilterComponent>
      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{key: 'Speciality', value: 'For Family'}}></FilterComponent>
      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{key: 'Speciality', value: 'For Groups'}}></FilterComponent>
      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{
      //       key: 'Speciality',
      //       value: 'Only for Boys',
      //     }}></FilterComponent>
      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{key: 'Speciality', value: 'Public'}}></FilterComponent>
      //   <FilterComponent
      //     addItem={this.addItem}
      //     removeItem={this.removeItem}
      //     object={{key: 'Speciality', value: 'Private'}}></FilterComponent>

      // </View>
    );
  };

  render() {
    console.log(this.state.Filters);
    return (
      <ScrollView style={{backgroundColor: '#white'}}>
        {this.renderTop()}
        {this.renderSpeciality()}
        {this.renderDestination()}
        {this.renderPrice()}

        {this.renderDays()}
        {this.renderDepartureDate()}

        <Button
        bordered
          style={{
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 7,
            marginTop: '5%',
            backgroundColor:ThemeColor
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf:"center"
            }}>
            Apply Filters
          </Text>
        </Button>
      </ScrollView>
    );
  }
}
