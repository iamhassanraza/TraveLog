import React from 'react'
import { View, Text ,TouchableWithoutFeedback,Image} from 'react-native'
import { Rating } from 'react-native-ratings';
import { VerifiedIcon } from "../assets/icons/Icons";

const OperatorIcon = (props) => {
    return (
        <TouchableWithoutFeedback onPress={()=>alert('navigate to tour operator profile')}>
        <View style={{flexDirection:'row',alignItems:'center'}}>

        {props.avatar ? <Image source={props.avatar} style={{height:50,width:50,borderRadius:50,marginRight:5}}></Image> : null}
                                <View style={{flexDirection:'column',width:'90%'}}>
                                <Text style={{fontWeight:'bold',fontSize:16} }>{props.name} {props.verified ?<VerifiedIcon size={17}></VerifiedIcon> : false }</Text> 
                                <Rating
                                    readonly={true}
                                    ratingCount={5}
                                    startingValue={props.rating}
                                    imageSize={15}
                                   style={{alignItems:'flex-start'}}
                                />
                                </View>
                                


        </View>
        </TouchableWithoutFeedback>
    )
}

export default OperatorIcon

