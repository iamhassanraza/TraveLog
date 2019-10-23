import React from 'react'
import { View, Text ,StyleSheet , ImageBackground} from 'react-native'

import { ThemeColor } from '../assets/Colors/Colors'

const HeaderImage = (props) => {
    return (
   
        <ImageBackground source={props.image} style={[styles.ImageContainer,props.style]}>
        
        <View style={{flexDirection:'column',flex:1}}>
       {props.price ? ( <View style={{flexDirection:'row',alignSelf:'flex-end',backgroundColor:'white',padding:'2%'}}>
             <Text style={{fontSize:16,fontWeight:'bold',color:'#6A6A6A'}}>{props.price}$</Text>
         </View>) : null}
         {props.tag ? (<Text style={{fontWeight:'900',backgroundColor:ThemeColor,padding: '2%',alignSelf: 'flex-start', color:'white'}}>{props.tag}</Text>
) : null}
            {/* <Text style={{marginTop:'3%',backgroundColor:ThemeColor,padding: '1%',alignSelf: 'flex-start', borderTopRightRadius:10, color:'white'}}>4 seats left</Text> */}
        </View>
         

{/*                     
                <View style={{width:'21%',height:22,backgroundColor: "rgba(47,161,230,1)",alignItems:'center',borderTopRightRadius:10,marginTop:'8%',justifyContent:'center'}}>
                    <Text style={{...styles.TourCardHeading,color:'white',fontSize:16,}}>300$</Text>
                </View>

                    
                <View style={{width:130,height:27,alignItems:'center',backgroundColor: "rgba(47,161,230,1)",borderTopRightRadius:10,marginTop:'2%'}}>
                    <Text style={{...styles.TourCardHeading,color:'white',fontSize:16,}}>4 Days Left</Text>
                </View> */}

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
    
        height:140,  
     
    
    
        
      
    },
    TourCardHeading:{
        fontSize:14,
        fontWeight:'bold',
        // color: ThemeColor,
        
       
    },
   
})