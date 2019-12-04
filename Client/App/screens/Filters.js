import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import FilterComponent from '../components/FilterComponent';
import {ThemeColor} from '../assets/Colors/Colors';
import RangeSlider from 'rn-range-slider';
import DatePicker from 'react-native-datepicker'

const textcolor = "#b3b3b5";

export default class Filters extends Component {
  state = {
    rangeLowPrice: 7000,
    rangeHighPrice: 50000,
    Days: 2,
    Filters: [],
    date:"2019-01-04"
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
      <View style={{ width:"80%", alignSelf:"center" , borderRadius:5}}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color:"#b3b3b5"
          }}>
          Price
        </Text>

        
       <View style={{borderWidth:1, paddingTop:10}}>
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
            marginBottom: '3%',
            
          }}>
          <Text style={{color:textcolor}} >PKR {this.state.rangeLowPrice}</Text>
          <Text style={{color:textcolor}}>PKR {this.state.rangeHighPrice}</Text>
        </View>
       </View>
        </View>
    
    );
  };

  renderDays = () => {
    return (
      <View style={{ width:"50%", alignSelf:"center" , borderRadius:5}}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color:textcolor
          }}>
          Duration
        </Text>
        <View style={{width:"100%", alignSelf:"center" , borderRadius:5, borderWidth:1}}>
        <View style={{marginRight: 5, alignItems: 'center'}}>
          <RangeSlider
            style={{width: '95%', height: 80, marginTop: '-15%'}}
            gravity={'center'}
            min={1}
            max={25}
            step={1}
            rangeEnabled={false}
            selectionColor={ThemeColor}
            labelBackgroundColor={ThemeColor}
            labelBorderColor={ThemeColor}
            blankColor="#272729"
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
          <Text style={{color:textcolor}}>{this.state.Days} Days</Text>
        </View>
        </View>
      </View>
    );
  };

  renderDepartureDate = () => {
    return (
      <View style={{borderWidth: 1,   alignSelf:"center"}}>
        <Text
          style={{
           
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            color:textcolor,
            alignSelf:"center"
          }}>
          Departure Date
        </Text>
        {/* <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'Jan 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'Feb 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'March 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'April 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'May 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'June 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'July 2019'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Date', value: 'Aug 2019'}}></FilterComponent> */}



      <DatePicker
        style={{width: 200, color:"white"}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      </View>
    );
  };

  renderDestination = () => {
    return (
      <View style={{borderWidth: 1, margin: 15, borderColor: 'white', backgroundColor:"#1F1F21"}}>
        <Text
          style={{
            marginLeft: '2%',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
          }}>
          Destination
        </Text>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Hunza'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Skardu'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Naran'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Kaghan'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Kashmir'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Sawat'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{key: 'Destination', value: 'Sindh'}}></FilterComponent>
        <FilterComponent
          addItem={this.addItem}
          removeItem={this.removeItem}
          object={{
            key: 'Destination',
            value: 'Balochistan',
          }}></FilterComponent>
      </View>
    );
  };

  renderSpeciality = () => {
    return (
      <View style={{borderWidth: 1, margin: 15, borderColor: 'white', backgroundColor:"#1F1F21"}}>
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
      <ScrollView style={{backgroundColor:"#white"}}>
        {this.renderTop()}
        {this.renderPrice()}
        <View style={{flexDirection:"row"}}>
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
