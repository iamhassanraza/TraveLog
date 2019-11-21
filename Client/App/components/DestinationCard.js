import React, { Component } from 'react';
import { Text, View, ImageBackground, Button ,TouchableHighlight ,Image,Dimensions, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { ThemeColor } from '../assets/Colors/Colors';
import LoadingIndicator from './LoadingIndicator';
import { withNavigation } from 'react-navigation';


// Props : id, onpress

class DestinationCard extends React.Component{

    state = {
        data:undefined,
        saved:false
    } 

    componentDidMount(){
        fetch(`http://192.168.100.13:3001/destination/card/${this.props.id}`)
            .then(response => {
                return response.json()})
            .then((responseJson)=> {
              this.setState({
               data : responseJson
              })
            }).catch(err=>console.log(err))
    }


    render() {
        if(this.state.data){
        return (
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('DestinationDetails', {
                DestinationData:this.state.data[0]
            })}>
            <View style={{
                        height:Dimensions.get('window').height/2.8,
                        width:Dimensions.get('window').width/2.6,
                        margin:5,
                        
                       
            }}>
                <View style={{flex:7}}>
                    <Image
                     source={{uri:`http://192.168.100.13:3001/images/${this.state.data[0].image_path}`}}
                     style={{width:"100%",
                            height:"99%" ,
                            borderTopLeftRadius:6, 
                            borderTopRightRadius:6,
                            borderBottomLeftRadius:6,
                            borderBottomRightRadius:6
                            }}>
                    </Image>
                </View>


                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:8}}>
                        <Text style={{ 
                            fontSize:16
                        }}>{this.state.data[0].name} </Text>
                        </View>
                        <View style={{flex:1.2}}>
                        
                        
                        <TouchableWithoutFeedback onPress={()=>{
                             this.setState((prevState) => ({
                                    saved: !prevState.saved
                                    }));
                        }}>

                             <Icon name={this.state.saved ? "bookmark" : "bookmark-o"} 
                                size={23} 
                                color={ThemeColor}
                                />
                    
                        </TouchableWithoutFeedback>
                    </View>
                    </View>
                </View>                
            </View>
            </TouchableHighlight>
        )
    }
    else {
        return( 
        
            <View style={{
                height:Dimensions.get('window').height/2.8,
                width:Dimensions.get('window').width/2.6,
                margin:5
                }}>
                <LoadingIndicator></LoadingIndicator>   
            </View>
        )
    }
    }
}

export default withNavigation(DestinationCard);
