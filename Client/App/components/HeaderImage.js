import React from 'react'
import { View, Text ,StyleSheet , ImageBackground} from 'react-native'
import image from "../assets/images/2.jpg"
import { ThemeColor } from '../assets/Colors/Colors'

const HeaderImage = () => {
    return (
   
        <ImageBackground source={image} style={styles.ImageContainer}>
         
                    
                <View style={{width:80,height:27,backgroundColor: "rgba(47,161,230,1)",alignItems:'center',borderTopRightRadius:10,marginTop:'8%'}}>
                    <Text style={{...styles.TourCardHeading,color:'white',fontSize:18,}}>300$</Text>
                </View>

                    
                <View style={{width:130,height:27,alignItems:'center',backgroundColor: "rgba(47,161,230,1)",borderTopRightRadius:10,marginTop:'2%'}}>
                    <Text style={{...styles.TourCardHeading,color:'white',fontSize:18,}}>4 Days Left</Text>
                </View>

{/* 
            <View style={{padding:2,backgroundColor: "rgba(0,0,0,0.2)",height:32,flexDirection:'column',justifyContent:'flex-end',}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                    </View>
            </View>    */}
        </ImageBackground>

    )
}

export default HeaderImage


const styles = StyleSheet.create({
    Container: {
     
        width:'80%',
        height:280,
        borderColor:'black',
        borderWidth:0.7,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
        
    },
    ImageContainer:{
    
        height:160,  
     
        flexDirection:'column',
    
        
      
    },
    TourCardHeading:{
        fontSize:14,
        fontWeight:'bold',
        // color: ThemeColor,
        
       
    },
   
})