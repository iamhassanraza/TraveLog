import React, {Component , lazy , Suspense }from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator
 
} from 'react-native';
import HeaderImage from '../components/HeaderImage';
import image from '../assets/images/4.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeColor , BackgroundColor , BorderColor} from '../assets/Colors/Colors';
const TextCutter = lazy(() => import('../components/TextCutter'));
import LoadingIndicator from '../components/LoadingIndicator'


import OperatorCard from '../components/TourDetailComponents/OperatorCard'

import IconWithText from '../components/IconWithText';


import OperatorIcon from '../components/OperatorIcon'

// import PlanCard from '../components/PlanCard';
import FlatListContainer from '../components/FlatListContainer'


const TourCard = lazy(()=> import('../components/TourCard') )
const PlanCard = lazy(() => import('../components/PlanCard'));

  const {width, height} = Dimensions.get('window');



export default class TourDetail extends Component {
  state = {
    saved: false,
    apiData:undefined
  };



  componentDidMount(){
    fetch("http://192.168.100.25:3001/tours/1")
        .then(response => {
            return response.json()})
        .then((responseJson)=> {
          this.setState({
            apiData : responseJson
          })
        }).catch(err=>console.log('error hai',err))
}




  renderHeading = (title)=>{
    return (<View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{fontSize: 25, fontWeight: 'bold',flex:1,marginBottom:10}}>
      {title ? title :'loading...'}
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

 renderOverview = (overview)=>{
   return(<Suspense fallback={()=><Text>loadingg..</Text>}>

         <TextCutter text={overview} limit={150} style={{lineHeight:22}}></TextCutter>
              
   </Suspense>
  )
 }

 renderIcons = (data)=>{
   const date_of_departure = new Date(data.date_of_departure)
   return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:10,flex:1}}>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="account-supervisor"
        title="Speciality:"
        subtitle={data.speciality}></IconWithText>
      <IconWithText
       textstyle={{fontSize:14}}
        icon="calendar-check"
        title="Departure:"
        subtitle={date_of_departure.getDate() + "-" + (date_of_departure.getMonth() + 1) + "-" + date_of_departure.getFullYear()}></IconWithText>
    </View>
    <View style={{flexDirection: 'column',flex:1}}>
      <IconWithText
        textstyle={{fontSize:14}}
        icon="timer"
        title="Duration"
        subtitle={data.duration}></IconWithText>
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
          <PlanCard tour_id='1'></PlanCard>
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
   const data = this.props.navigation.getParam('TourData','Got no data from tour card via navigation')
   console.log('in data',data)
    return (
      <ScrollView>
        
        <HeaderImage image={image} style={{height: height / 3}}></HeaderImage>
        <View style={{borderWidth:0.5,backgroundColor:'white',borderColor:BorderColor,paddingLeft:10,paddingRight:10,paddingBottom:10}}>
        {this.renderHeading(data.title)}
        {this.renderOverview('overview')}
        {this.renderIcons({speciality:data.speciality, duration:data.duration, date_of_departure: data.date_of_departure })}
        </View>
        {this.renderOperatorCard()}
        {/* <OperatorCard></OperatorCard> */}
        {this.renderPlan()}
        {/* {this.renderTourList()} */}
       

        
        
       
          
       
      </ScrollView>
    );
  }
}
