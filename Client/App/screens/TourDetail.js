import React, {Component , lazy , Suspense }from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
 Linking,
 AsyncStorage
} from 'react-native';
import HeaderImage from '../components/HeaderImage';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeColor , BackgroundColor , BorderColor} from '../assets/Colors/Colors';
import LoadingIndicator from '../components/LoadingIndicator'
import TextCutter from '../components/TextCutter'

import OperatorCard from '../components/TourDetailComponents/OperatorCard'

import IconWithText from '../components/IconWithText';

import TourCard from '../components/TourCard'
import OperatorIcon from '../components/OperatorIcon'

import PlanCard from '../components/PlanCard';
import FlatListContainer from '../components/FlatListContainer'



// const PlanCard = lazy(() => import('../components/PlanCard'));

  const {width, height} = Dimensions.get('window');



export default class TourDetail extends Component {
  state = {
    saved: this.props.navigation.getParam('saved','Nothin') ,
    apiData:undefined
  };

    data = this.props.navigation.getParam('TourData','Got no data from tour card via navigation') 

    savePost = async postId => {
      this.setState(prevState => ({
        saved: !prevState.saved,
      }));
      const User = JSON.parse(await AsyncStorage.getItem('User'));
      var Response = null;
      if (this.state.saved) {
        Response = await fetch(
          `https://travelog-adonis.herokuapp.com/api/v1/user/save/post?post_id=${postId}&user_id=${User.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${User.token}`,
            },
          },
        );
      } else {
        Response = await fetch(
          `https://travelog-adonis.herokuapp.com/api/v1/user/unsave/post?post_id=${postId}&user_id=${User.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${User.token}`,
            },
          },
        );
      }
      const JsonResponse = await Response.json();
      if (parseInt(Response.status) === 400) {
        alert(JsonResponse.message);
      } else if (parseInt(Response.status) === 200) {
        alert(JsonResponse.message);
      } else {
        alert('something is wrong');
      }
    };

  renderHeading = (title)=>{
    return (<View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{fontSize: 25, fontWeight: 'bold',flex:1,marginBottom:10}}>
      {title ? title :'loading...'}
    </Text>
    <Text >
      <Icon
        onPress={() => {this.savePost(this.data.id)}}
        name={this.state.saved ? 'bookmark' : 'bookmark-o'}
        size={35}
        color={ThemeColor}
      />
    </Text>
  </View>)
  }

 renderOperatorCard = (Operator) => {
return (
  <View style={{borderWidth:0.5,marginTop:10,paddingBottom:10,paddingTop:10,backgroundColor:'white',borderColor:BorderColor}}>
  <Text style={{paddingLeft:10,fontSize:15,marginBottom:10}}> This Tour is operated by:</Text>
  <OperatorIcon
    name={Operator.name}
    avatar={Operator.dp}
    rating={Operator.rating}
    verified={Operator.is_verified}
    style={{margin: 10}}></OperatorIcon>
  <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <IconWithText
      onPress={() => {this.state.apiData ? Linking.openURL(`tel:${this.state.apiData.operator_phone}`) : Linking.openURL(`tel:${'0020202'}`)}}
      icon="phone"
      title="Call"
      textstyle={{marginLeft: 3}}
      style={{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 10,
        borderColor: ThemeColor
      }}></IconWithText>

    <IconWithText
      onPress={() => Linking.openURL('mailto:touroperator@gmail.com')}
      icon="email"
      title="Mail"
      textstyle={{marginLeft: 3}}
      style={{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 10,
        borderColor: ThemeColor,
      }}></IconWithText>

    <IconWithText
      onPress={() =>
        Linking.openURL(
          `https://maps.apple.com/?q=${'Orangi Town'}&ll=${'24.950083'},${'66.992844'}`,
        )
      }
      icon="map-marker"
      title="Locate"
      textstyle={{marginLeft: 3}}
      style={{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 10,
        borderColor: ThemeColor
      }}></IconWithText>
  </View>
  </View>

)
 }

 renderOverview = (overview)=>{
   return( <TextCutter text={overview} limit={150} style={{lineHeight:22}}></TextCutter>
  )
 }

 renderIcons = (data)=>{
   const date_of_departure = new Date(this.data.departure_date)
   return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:10,flex:1}}>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="account-supervisor"
        title="Speciality"
        subtitle={this.data.speciality}></IconWithText>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="calendar-check"
        title="Departure"
        subtitle={date_of_departure.getDate() + "-" + (date_of_departure.getMonth() + 1) + "-" + date_of_departure.getFullYear()}></IconWithText>
    </View>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
        textstyle={{fontSize:14}}
        icon="timer"
        title="Duration"
        subtitle={`${this.data.number_of_days} Days`}></IconWithText>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="seat-recline-normal"
        title="Seats Left"
        subtitle="10"></IconWithText>
    </View>
  </View>
   )
 }


 renderPlan = () => {
   return( 
          <View style={{marginTop:10,borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor,padding:10}}>
          <PlanCard tour_id={this.tourId}></PlanCard>
          </View>
      
   )
 }

 renderTourList = ()=>{
   return(<View style={{marginTop:10,borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor}}>
   <FlatListContainer style={{marginLeft:'3%'}} title="You May Also Like">
   <FlatList
                    horizontal
                    data={this.suggestedTours}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}}
                    id={item}
                    seatsLeft={10} ></TourCard>}
                    keyExtractor={item => item}
                    />
                </FlatListContainer>
         </View>)
 }

  render() {
  

    return (
      <ScrollView>
        
        <HeaderImage imageUrl={this.data.postDetail[0].image_url} style={{height: height / 3}}></HeaderImage>
        <View style={{borderWidth:0.5,borderColor:BorderColor,paddingLeft:10,paddingRight:10,paddingBottom:10}}>
        {this.renderHeading(this.data.title)}
        {this.state.apiData ? this.renderOverview(this.data.description) : this.renderOverview('')}
        {this.renderIcons({speciality:this.data.speciality, duration:this.data.number_of_days, date_of_departure: this.data.departure_date })}
        </View>
       
        <View>

      
        {/* {this.state.apiData ? this.renderOperatorCard({name:this.data[0].name, rating:this.data[0].numeric_rating,is_verified:this.data[0].is_verified,dp:this.data[0].operatordp}) : <LoadingIndicator></LoadingIndicator>} */}
        </View>
        {/* <OperatorCard></OperatorCard> */}
        {/* {this.renderPlan()}
        {this.renderTourList()} */}
       

        
        
       
          
       
      </ScrollView>
    );
  }
}
