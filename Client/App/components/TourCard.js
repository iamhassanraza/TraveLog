import React from 'react'
import { View, Text , StyleSheet,ImageBackground} from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'
import image from '../assets/images/2.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
const TourCard = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.ImageContainer}>
                <ImageBackground source={image} style={styles.ImageContainer}>
                    <View style={{padding:2,backgroundColor: "rgba(0,0,0,0.5)",height:32,flexDirection:'column',justifyContent:'flex-end'}}>
                            <View>
                                <Text style={{...styles.TourCardHeading,color:'white',fontSize:22}}>Trip to SKARDU</Text>
                            </View>
                    </View>   
                </ImageBackground>
            </View>

          <View style={styles.TextConatiner}>
                <View style={{borderWidth:0.3,height:50,width:50}}>

                </View>
        
                <View style={{paddingLeft:2}}>
                        <Text style={styles.TourCardDate}><Text>From: </Text>9 Oct<Text> to </Text>20 Oct, 2019</Text>
                        <Text style={styles.TourCardHeading}>Noman Adventure Society </Text>
                        <Icon name="rocket" size={30} color="#900" />
                        
                </View>

                <View style={{borderWidth:0.3,height:50,width:50}}>

                </View>
        </View>
                
        </View>
    )
}

export default TourCard

const styles = StyleSheet.create({
    Container: {
     
        width:'80%',
        height:300,
        borderColor:'black',
        borderWidth:0.7,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
        
    },
    ImageContainer:{
    
        height:190,  
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    TourCardHeading:{
        fontSize:14,
        fontWeight:'bold',
        color: ThemeColor,
        
       
    },
    TourCardDate:{
        fontSize:12,
        color:'red'
    },
    TextConatiner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
        
    }
   
})