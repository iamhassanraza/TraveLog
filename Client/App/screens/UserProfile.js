import React, { Component } from 'react'
import { Text, View, ImageBackground,Image } from 'react-native'
import head from '../assets/images/blueHead.png'
import pic from '../assets/images/pf.jpeg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeColor} from '../assets/Colors/Colors' 

export default class UserProfile extends Component {
    render() {
        return (
            
                 <ImageBackground
            source={head}
            style={{
              height: '45%',
              width: '100%',
            }}>
                <View>
                
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", paddingLeft:"3%",paddingTop:"4%"}}>Syed Ali Mehdi</Text>
                <Image source={pic}style={{ height:120, width:120, borderRadius:120,borderWidth:3,borderColor:'#44a9eb',marginLeft:"50%", marginTop:"2%"}}>
                </Image>
              
                <Icon style={{alignContent:"flex-end",color: "white",fontSize: 20,position: 'absolute',right:"5%",top:'2%'}} name="square-edit-outline" />

<View style={{alignSelf:"center", paddingTop:"5%"}}> 
            
            <View style={{flexDirection:"row", marginTop:'3%'}}>
            <View style={{elevation:1.5,marginRight:"10%", borderRadius:40,height:40,width:40, justifyContent:"center", alignItems:"center"}}>
            <Icon style={{color: ThemeColor,fontSize: 25}} name="phone" />
            </View>
               <View>
               <Text style={{color:"grey"}}>
                    Contact
                </Text>
                <Text style={{fontSize:17}}>
                    03132055798
                </Text>
               </View>
            </View>

            <View style={{flexDirection:"row", marginTop:'5%'}}>
            <View style={{elevation:1.5,marginRight:"10%", borderRadius:40,height:40,width:40, justifyContent:"center", alignItems:"center"}}>
            <Icon style={{color: ThemeColor,fontSize: 22}} name="email" />
            </View>
               <View>
               <Text style={{color:"grey"}}>
                    Email
                </Text>
                <Text style={{fontSize:17}}>
                    salimehdi144@gmail.com
                </Text>
               </View>
            </View>


            <View style={{flexDirection:"row", marginTop:'5%'}}>
            <View style={{elevation:1.5,marginRight:"10%", borderRadius:40,height:40,width:40, justifyContent:"center", alignItems:"center"}}>
            <Icon style={{color: ThemeColor,fontSize: 22}} name="home-city-outline" />
            </View>
               <View>
               <Text style={{color:"grey"}}>
                    City
                </Text>
                <Text style={{fontSize:17}}>
                    Karachi
                </Text>
               </View>
            </View>


            <View style={{flexDirection:"row", marginTop:'5%'}}>
            <View style={{elevation:1.5,marginRight:"10%", borderRadius:40,height:40,width:40, justifyContent:"center", alignItems:"center"}}>
            <Icon style={{color: ThemeColor,fontSize: 23}} name="security" />
            </View>
               <View>
               <Text style={{color:"grey"}}>
                    Password
                </Text>
                <Text style={{fontSize:17}}>
                    *********
                </Text>
               </View>
            </View>

            
</View>
</View>
</ImageBackground>
            
        )
    }
}
