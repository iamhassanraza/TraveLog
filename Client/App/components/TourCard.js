import React from 'react'
import { View, Text , StyleSheet,ImageBackground, Dimensions,Image,TouchableWithoutFeedback} from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'

import Icon from 'react-native-vector-icons/FontAwesome';
import image from "../assets/images/1.jpg"
import HeaderImage from './HeaderImage';
import DateIcon from 'react-native-vector-icons/Fontisto';
import SpecialityIcon from 'react-native-vector-icons/SimpleLineIcons';

import SeatsLeftIcon from 'react-native-vector-icons/MaterialIcons';

import IconWithText from './IconAndText'
import OperatorIcon from './OperatorIcon';

export default class TourCard extends React.Component {

    state = {
        saved:false
    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>alert('navigate to tour details')}>
            <View style={styles.Container} >
         <HeaderImage></HeaderImage>
        <View style={styles.TextConatiner}>
                <View style={{flex:4,justifyContent:'space-around',paddingLeft:'2%'}}>

                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{this.props.title} </Text>
                        <IconWithText name="calendar-check" text={`From: ${this.props.startDate} to ${this.props.endDate}`} textstyle={styles.TourCardDate}></IconWithText>
                        <IconWithText name="account-supervisor" text={`Speciality: ${this.props.speciality}`} textstyle={styles.TourCardDate}></IconWithText>
                        <IconWithText name='seat-recline-normal' text={`Seats Left: ${this.props.seatsLeft}`} textstyle={styles.TourCardDate}></IconWithText>
                        
                </View>



                <View style={{flex:1,alignItems:'center',paddingTop:'2%'}}>

                <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                size={30} 
                color={ThemeColor} 
                onPress={()=>{
                    this.setState((prevState) => ({
                        saved: !prevState.saved
                      }));
                }} />
                <Text style={{marginTop:-5,color:'grey', fontSize: 13,fontWeight:'bold'}}>{this.state.saved ? 'saved' : 'save'}</Text>
                    
                </View>
        </View>


        {/* TourOperator */}
       
        <OperatorIcon style={{padding:'2%'}} name="Greenland travel and tours" avatar={this.props.operator.image} rating={this.props.operator.rating} verified={this.props.operator.verified} ></OperatorIcon>
        
    
    </View> 
    </TouchableWithoutFeedback>
        )
    }
}



const styles = StyleSheet.create({
    Container: {
        margin:10,
        width:Dimensions.get('window').width/1.3,
        height:Dimensions.get('window').height/2.1,
        borderColor:'black',
        borderWidth:1,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        borderColor:ThemeColor
        
    },
    ImageContainer:{
    
        height:190,  
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    TourCardHeading:{
        fontSize:15,
       
        // color: ThemeColor,

        
       
    },
    TourCardDate:{
        
        fontSize:12,
        color:'#5c5353'
    },
    TextConatiner:{
        flex:2,
        flexDirection:'row',
      
        
    }
   
})