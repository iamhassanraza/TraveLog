import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button , Image} from 'react-native';
import { Card , Icon} from 'native-base';
import image from "../../ccc.jpg";

const DestinationCard = (props) => {

   return(

        <Card style={styles.DestinationCard}>

            <Image style={styles.DestinationCardImage} source={image}></Image>

            <View style={styles.DestinationTextImage}>
                <Text style={styles.DestinationText}> Passu Cones </Text>
                <Icon style={styles.DestinationIcon} type="Ionicons" name="bookmark" /> 
            </View>
            
        </Card>
                     
   );
}


const styles = StyleSheet.create({

    DestinationText: {
        alignSelf:"center",
        
    },

    DestinationIcon: {
        
        alignSelf:"center", 
        marginRight:"3%",
        fontSize:25, 
        color: "#3399FF"
    },

    DestinationTextImage:{
         
        borderBottomLeftRadius:6, 
        borderBottomRightRadius:6,
        flexDirection:"row",
        justifyContent:"space-between",
        
    },

    DestinationCardImage : {
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6,
        borderBottomLeftRadius:6, 
        borderBottomRightRadius:6,
        width:  '100%',
        height: "100%"
    },

    DestinationCard :{
      
        height:"30%",
        width:"40%",
        borderRadius: 6,
        shadowColor: '#3399FF',
        shadowOpacity: 1.0
    }

});

export default DestinationCard;