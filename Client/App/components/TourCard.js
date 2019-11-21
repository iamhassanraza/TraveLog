import React from 'react'
import { View, Text , StyleSheet,ImageBackground, Dimensions,Image,TouchableWithoutFeedback,TouchableHighlight} from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'

import Icon from 'react-native-vector-icons/FontAwesome';
import image from "../assets/images/7.jpg"
import HeaderImage from './HeaderImage';
import DateIcon from 'react-native-vector-icons/Fontisto';
import SpecialityIcon from 'react-native-vector-icons/SimpleLineIcons';
import LoadingIndicator from '../components/LoadingIndicator'
import { withNavigation } from 'react-navigation';
import SeatsLeftIcon from 'react-native-vector-icons/MaterialIcons';

import IconWithText from './IconAndText'
// import IconWithText from './IconWithText'
import OperatorIcon from './OperatorIcon';

class TourCard extends React.Component {

    state = {
        data:undefined,
        saved:false
    }


    componentDidMount(){
        fetch("http://192.168.100.25:3001/tours/card/1")
            .then(response => {
                return response.json()})
            .then((responseJson)=> {
              this.setState({
               data : responseJson
              })
            }).catch(err=>console.log('error hai',err))
    }

    //     fetchimage = async ()=>{
    //     console.log('in fetch image')
    //     console.log(await fetch('http://192.168.100.25:3001/images/1.jpg'))
    //     console.log('done')
    // }



    render() {
        if(this.state.data)
        {
        const start_Date = new Date(this.state.data[0].date_of_departure)
        const end_date = new Date(this.state.data[0].end_date)
        let formatted_start_date = start_Date.getDate() + "-" + (start_Date.getMonth() + 1) + "-" + start_Date.getFullYear()
        let formatted_end_date = end_date.getDate() + "-" + (end_date.getMonth() + 1) + "-" + end_date.getFullYear()
       
        const duration = (end_date.getTime() - start_Date.getTime()) /(1000 * 3600 * 24)

  
         
            
        return (
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('TourDetail', {
                TourData:{...this.state.data[0],duration:duration}
            })}>
                <View>
            <View style={[styles.Container,this.props.style]} >
         <HeaderImage image={{uri:`http://192.168.100.25:3001/images/${this.state.data[0].tourcover}`}} tag="5 Days Left" price={this.state.data[0].price}></HeaderImage>
        <View style={styles.TextConatiner}>
                <View style={{flex:4,justifyContent:'space-around',paddingLeft:'2%'}}>

                        <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginBottom:'3%'}}>{this.state.data[0].title} </Text>
                        <IconWithText name="calendar-check" text={`From: ${formatted_start_date} to ${formatted_end_date}`} textstyle={styles.TourCardDate}></IconWithText>
                        <IconWithText name="account-supervisor" text={`Speciality: ${this.state.data[0].speciality}`} textstyle={styles.TourCardDate}></IconWithText>
                        <IconWithText name='seat-recline-normal' text={`Seats Left: ${this.props.seatsLeft}`} textstyle={styles.TourCardDate}></IconWithText>
                        
                </View>

                    {/* Save icon */}

                <View style={{flex:1,alignItems:'center',paddingTop:'2%'}}>

                  <TouchableWithoutFeedback  onPress={()=>{
                    this.setState((prevState) => ({
                        saved: !prevState.saved
                      }));
                }} >
                <View style={{padding:5,alignItems:'center'}} >

            
                <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                size={30} 
                color={ThemeColor} />
                <Text style={{marginTop:-5,color:'grey', fontSize: 13,fontWeight:'bold'}}>{this.state.saved ? 'saved' : 'save'}</Text>
                </View>
                </TouchableWithoutFeedback>  
                </View>
        </View>


        {/* TourOperator */}
       
        <OperatorIcon style={{padding:'2%',marginTop:5}} name={this.state.data[0].name} avatar={this.state.data[0].operatordp} rating={this.state.data[0].numeric_rating} verified={this.state.data[0].is_verified} ></OperatorIcon>
      
    
    </View> 
    </View>
    </TouchableHighlight>
        )
            }
       else{
           return(
            <View style={{width:Dimensions.get('window').width/1.4,height:190,  borderColor:'#8b8e8f',backgroundColor:'white',marginRight:10,justifyContent:'center',alignContent:'center'}} >
           <LoadingIndicator></LoadingIndicator>
           </View>
           
           )
       }     


    }
}

export default withNavigation(TourCard);

const styles = StyleSheet.create({
    Container: {
     
        width:Dimensions.get('window').width/1.4,
    
        backgroundColor:'white',
        borderWidth:0.5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        borderColor:'#8b8e8f'
        
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
      
        flexDirection:'row',
      
        
    }
   
})