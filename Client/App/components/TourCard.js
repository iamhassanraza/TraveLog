import React from 'react'
import { View, Text , StyleSheet,ImageBackground, Dimensions,Image,TouchableWithoutFeedback} from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'
import image from '../assets/images/2.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import { VerifiedIcon } from "../assets/icons/Icons";
import HeaderImage from './HeaderImage';
import DateIcon from 'react-native-vector-icons/Fontisto';
import SpecialityIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Rating } from 'react-native-ratings';
import SeatsLeftIcon from 'react-native-vector-icons/MaterialIcons';

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

                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{this.props.title}</Text>
                        <Text style={styles.TourCardDate}><DateIcon name='date' color={ThemeColor}></DateIcon> From: 9 Oct to 20 Oct, 2019</Text>
                        <Text style={styles.TourCardDate}><SpecialityIcon color={ThemeColor} name='people' size={13}></SpecialityIcon> Speciality: Family</Text>
                        <Text style={styles.TourCardDate}><SeatsLeftIcon color={ThemeColor} name='airline-seat-recline-normal' size={15}></SeatsLeftIcon> Seats Left : 10</Text>
                       
                </View>



                <View style={{flex:1,alignItems:'center',paddingTop:'2.5%'}}>

                <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                size={40} 
                color={ThemeColor} 
                onPress={()=>{
                    this.setState((prevState) => ({
                        saved: !prevState.saved
                      }));
                }} />
                <Text style={{marginTop:-6}}>{this.state.saved ? 'saved' : 'save'}</Text>
                    
                </View>
        </View>


        {/* TourOperator */}
        <TouchableWithoutFeedback onPress={()=>alert('navigate to tour operator profile')}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',paddingLeft:'2%'}}>

        <Image source={image} style={{height:50,width:50,borderRadius:50,marginRight:5}}></Image>
                                <View style={{flexDirection:'column',width:'90%'}}>
                                <Text style={styles.TourCardHeading,{fontWeight:'bold',fontSize:16} }>Nomads Adventure <VerifiedIcon size={17}></VerifiedIcon></Text> 
                                <Rating
                                    readonly={true}
                                    ratingCount={5}
                                    startingValue={3.5}
                                    imageSize={15}
                                   style={{alignItems:'flex-start'}}
                                />
                                </View>
                                


        </View>
        </TouchableWithoutFeedback>
    
    
    </View> 
    </TouchableWithoutFeedback>
        )
    }
}



const styles = StyleSheet.create({
    Container: {
     
        width:'80%',
        height:330,
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