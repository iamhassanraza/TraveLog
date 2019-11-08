import React, {Component , lazy , Suspense}from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
 
} from 'react-native';
import HeaderImage from '../components/HeaderImage';
import image from '../assets/images/4.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeColor , BackgroundColor , BorderColor} from '../assets/Colors/Colors';
const TextCutter = lazy(() => import('../components/TextCutter'));



import {Linking} from 'react-native';

import IconWithText from '../components/IconWithText';


import OperatorIcon from '../components/OperatorIcon'

// import PlanCard from '../components/PlanCard';
import FlatListContainer from '../components/FlatListContainer'


const TourCard = lazy(()=> import('../components/TourCard') )
const PlanCard = lazy(() => import('../components/PlanCard'));

const overview =
      'Gilgit-Baltistan formerly known as the Northern Areas,is the northernmost territory administered by Pakistan.It is part of the larger Kashmir region, which is the subject of a territorial dispute between India, Pakistan, and China. It borders Azad Kashmir to the south, the province of Khyber Pakhtunkhwa to the west, the Wakhan Corridor of Afghanistan to the north, the Xinjiang region of China, to the east and northeast, and the Indian-administered state of Jammu and Kashmir to the southeast , Gilgit-Baltistan is part of the greater Kashmir region, which is the subject of a long-running conflict between Pakistan and India. The territory shares a border with Azad Kashmir, together with which it is referred to by the United Nations and other international organisations as Pakistan administered Kashmir.[1][note 1] Gilgit-Baltistan is six times the size of Azad Kashmir.[13] The territory also borders Indian-administered Jammu and Kashmir state to the south and is separated from it by the Line of Control, the de facto border between India and Pakistan.';
    const {width, height} = Dimensions.get('window');

const DATA = [
  {
      price:300,
      title:'Hunza',
      daysLeft:2,
      speciality:'Girls',
      seatsLeft:10,
      startDate:'9 oct',
      endDate:'20 oct',
      OperatorCard:{name:"Nomad's Adventure",image,rating:3.4,verified:true}
  },
  {
   price:300,
   daysLeft:2,
   title:'Kashmir',
   speciality:'Girls',
   seatsLeft:10,
   startDate:'9 oct',
   endDate:'20 oct',
   OperatorCard:{name:'Greenland  tours',image,rating:3.4,verified:true}
},
{
   price:300,
   daysLeft:2,
   speciality:'Girls',
   seatsLeft:10,
   title:'China Border',
   startDate:'9 oct',
   endDate:'20 oct',
   OperatorCard:{name:'Greenland Travel ',image,rating:3.4,verified:true}
},
{
   price:300,
   daysLeft:2,
   speciality:'Girls',
   seatsLeft:10,
   title:'Turkey',
   startDate:'9 oct',
   endDate:'20 oct',
   OperatorCard:{name:'Greenland and tours',image,rating:3.4,verified:true}
},
{
   price:300,
   daysLeft:2,
   speciality:'Girls',
   seatsLeft:10,
   title:'Skardu',
   startDate:'9 oct',
   endDate:'20 oct',
   OperatorCard:{name:'GreenTravel and tours',image,rating:3.4,verified:true}
},
 ];


export default class TourDetail extends Component {
  state = {
    saved: false,
  };


  renderHeading = ()=>{
    return (<View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{fontSize: 25, fontWeight: 'bold',flex:1,marginBottom:10}}>
      Gilgit Baltistan and hunza and stuff
    </Text>

    <Text >
      <Icon
        name={this.state.saved ? 'bookmark' : 'bookmark-o'}
        size={35}
        color={ThemeColor}
      />
    </Text>
  </View>)
  }

 renderOperatorCard = ()=>{
return (
  <View style={{borderWidth:0.5,marginTop:10,paddingBottom:10,paddingTop:10,backgroundColor:'white',borderColor:BorderColor}}>
  <Text style={{paddingLeft:10,fontSize:15,marginBottom:10}}> This Tour is operated by:</Text>
  <OperatorIcon
    name="Nomad's Adventure"
    avatar={image}
    rating={4}
    verified={true}
    style={{margin: 10}}></OperatorIcon>
  <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <IconWithText
      onPress={() => Linking.openURL(`tel:${'03002344567'}`)}
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

 renderOverview = ()=>{
   return(<Suspense fallback={()=><Text>loadingg...</Text>}>

         <TextCutter text={overview} limit={150} style={{lineHeight:22}}></TextCutter>
              
   </Suspense>
  )
 }

 renderIcons = ()=>{
   return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:10,flex:1}}>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="account-supervisor"
        title="Speciality:"
        subtitle="Family"></IconWithText>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="calendar-check"
        title="Departure:"
        subtitle="2 October,2019"></IconWithText>
    </View>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
        textstyle={{fontSize:14}}
        icon="timer"
        title="Duration"
        subtitle="11 Days"></IconWithText>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="seat-recline-normal"
        title="Seats Left"
        subtitle="10"></IconWithText>
    </View>
  </View>
   )
 }


 renderPlan = ()=>{
   return( <Suspense fallback={()=><Text>loading...</Text>}>
          <View style={{marginTop:10,borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor,padding:10}}>
          <PlanCard></PlanCard>
          </View>
          </Suspense>
   )
 }

 renderTourList = ()=>{
   return(<View style={{marginTop:10,borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor}}>
   <FlatListContainer style={{marginLeft:'3%'}} title="You May Also Like">
             <FlatList
             horizontal
             data={DATA}
             showsHorizontalScrollIndicator={false}
             renderItem={({ item }) =><Suspense fallback={()=><Text>loading...</Text>}>

           <TourCard style={{marginRight:10}} title={item.title}
             price={item.price} 
             daysLeft={item.daysLeft} 
             speciality={item.speciality} 
             seatsLeft={item.seatsLeft} 
             startDate={item.startDate}
             endDate={item.endDate}
             operator={{name:item.OperatorCard.name,image,rating:3.4,verified:true}}></TourCard>
                </Suspense>}
             keyExtractor={item => item.OperatorCard.name}
             />
         </FlatListContainer>
         </View>)
 }

  render() {
    
    return (
      <ScrollView>
        <HeaderImage image={image} style={{height: height / 3}}></HeaderImage>
        <View style={{borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor,paddingLeft:10,paddingRight:10,paddingBottom:10}}>
        {this.renderHeading()}
        {this.renderOverview()}
        {this.renderIcons()}
        </View>
        {this.renderOperatorCard()}
        {this.renderPlan()}
        {this.renderTourList()}
       

        
        
       
          
       
      </ScrollView>
    );
  }
}
