import React, { Component } from 'react'
import { Text, View,ScrollView ,Dimensions,Button,TouchableWithoutFeedback} from 'react-native'
import HeaderImage from "../components/HeaderImage"
import image from "../assets/images/2.jpg"
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeColor }  from "../assets/Colors/Colors"
import TextCutter from '../components/TextCutter';

import {Linking} from 'react-native';


import IconWithText from "../components/IconWithText"
import OperatorIcon from "../components/OperatorIcon"
import { Container, Header, Content, Accordion } from "native-base";




export default class TourDetail extends Component {

    state = {
        saved:false,

    }

  

    render() {
    const dataArray = [
  { title: "DAY 1", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 2", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 3", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 4", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 5", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 6", content: "Lorem ipsum dolor sit amet" },
  { title: "DAY 7", content: "Lorem ipsum dolor sit amet" }
];
        const overview = "Gilgit-Baltistan (Urdu: گلگت بلتستان‎, Balti: རྒྱལ་སྐྱིད་ སྦལྟི་ཡུལ།), formerly known as the Northern Areas,[8] is the northernmost territory administered by Pakistan.[1] It is part of the larger Kashmir region, which is the subject of a territorial dispute between India, Pakistan, and China. It borders Azad Kashmir to the south, the province of Khyber Pakhtunkhwa to the west, the Wakhan Corridor of Afghanistan to the north, the Xinjiang region of China, to the east and northeast, and the Indian-administered state of Jammu and Kashmir to the southeast , Gilgit-Baltistan is part of the greater Kashmir region, which is the subject of a long-running conflict between Pakistan and India. The territory shares a border with Azad Kashmir, together with which it is referred to by the United Nations and other international organisations as Pakistan administered Kashmir.[1][note 1] Gilgit-Baltistan is six times the size of Azad Kashmir.[13] The territory also borders Indian-administered Jammu and Kashmir state to the south and is separated from it by the Line of Control, the de facto border between India and Pakistan."
        const { width , height } = Dimensions.get('window')
        return (
            <ScrollView>
                <HeaderImage image={image} style={{height:height/3}}></HeaderImage>
                <View style={{}}>

                
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1}}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>
                                Gilgit Baltistan
                        </Text> 
                    
                    
                        <Text>
                        <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                            size={35} 
                            color={ThemeColor} />
                        </Text>
                   
                   
                    </View>
                    <TextCutter text={overview} limit={200} style={{borderWidth:1}}></TextCutter>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'column'}}>

                
                    <IconWithText icon='account-supervisor' title='Speciality:' subtitle='Family'></IconWithText>
                    <IconWithText icon='calendar-check' title='Departure:' subtitle='2 October,2019'></IconWithText>
                    </View>
                    <View style={{flexDirection:'column'}}>

                
                    <IconWithText icon='timer' title='Duration' subtitle='11 Days'></IconWithText>
                    <IconWithText icon='seat-recline-normal' title='Seats Left' subtitle='10'></IconWithText>
                    </View>
                    </View>
                   
                   
                    <View style={{borderWidth:1,padding:10}}>
                        <Text> This tour is operated by:</Text>
                        <OperatorIcon name="Nomad's Adventure" avatar={image} rating={4} verified={true} style={{margin:10}}>
                        
                        </OperatorIcon>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
                    
                        
                       
                         
                        
                        
                        <IconWithText onPress={()=>Linking.openURL(`tel:${'03002344567'}`)} icon='phone' title='Call' textstyle={{marginLeft:3}} style={{borderWidth:1,padding:5,borderRadius:10,borderColor:'#B4B7B9'}}></IconWithText>
                        
                    
                        
                        
                        <IconWithText onPress={()=>Linking.openURL('mailto:touroperator@gmail.com') } icon='email' title='Mail' textstyle={{marginLeft:3}} style={{borderWidth:1,padding:5,borderRadius:10,borderColor:'#B4B7B9'}}></IconWithText>
                      
                        
                       
                        <IconWithText onPress={()=>Linking.openURL(`https://maps.apple.com/?q=${'Orangi Town'}&ll=${'24.950083'},${'66.992844'}`)} icon='map-marker' title='Locate' textstyle={{marginLeft:3}} style={{borderWidth:1,padding:5,borderRadius:10,borderColor:'#B4B7B9'}}></IconWithText>
                        
               
                        
                   
                        </View>


                      
       <View style={{padding:10}}>

 
            <Text style={{fontWeight:'bold',fontSize:20}}>
                PLAN
            </Text>
          <Accordion
          e
          contentStyle={{ backgroundColor: "#ddecf8" }}
             headerStyle={{ backgroundColor: "#b7daf8" }}
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
          />
       
       </View>
                 
                    </View>



{/* 
            <Button title='open call' onPress={()=>{
                // Linking.openURL(`tel:${'020202'}`)
                // Linking.openURL('mailto:touroperator@gmail.com') 
                 // Linking.openURL(`tel:${'020202'}`)
                Linking.openURL(`https://maps.apple.com/?q=${'hassan'}&ll=${'37.222'},${'-199.128'}`);
                // Linking.openURL('mailto:touroperator@gmail.com') 
            }}></Button> */}
            </ScrollView>
        )
    }
}
