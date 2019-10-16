import React from 'react'
import { View, Text , StyleSheet,ImageBackground} from 'react-native'
import  { ThemeColor } from '../assets/Colors/Colors'
import image from '../assets/images/2.jpg'

const TourCard = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.ImageContainer}>
                <ImageBackground source={image} style={styles.ImageContainer}>
                <View style={{backgroundColor:'blue',height:50,flexDirection:'column',justifyContent:'flex-end'}}>
                    <Text style={{...styles.TourCardHeading,color:'white'}}>SKARDU</Text>
                    </View>
                  
                   
                  
                </ImageBackground>
            </View>
    
        
        <View>

        <Text style={styles.TourCardHeading}>Noman Adventure Society </Text>
        <Text style={styles.TourCardDate}><Text>From: </Text>9 Oct<Text> to </Text>20 Oct, 2019</Text>
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

    },
    TourCardHeading:{
        fontSize:18,
        fontWeight:'bold',
        color: ThemeColor
       
    },
    TourCardDate:{
        fontSize:12
    },
    giveOpacity:{
        width:300,
        height:200,
        backgroundColor:'black',
        borderColor:'black',
        borderWidth:5,
        padding:30,
        margin:20,
        
    }
})