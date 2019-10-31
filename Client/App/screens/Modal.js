// import React, { Component } from 'react'
// import { Text, View, ScrollView,FlatList,Dimensions, ImageBackground} from 'react-native'

// import image from "../assets/images/1.jpg"
// import FlatListContainer from '../components/FlatListContainer'
// import ForModal from '../components/ForModal'
// import image2 from "../assets/images/2.jpg"


// export default class Flayt extends Component {

  

//     render() {

//         const DATA = [
//             { i: image},
//             { i: image2},
//             { i: image},
//             { i: image2},
//             { i: image2},
//             { i: image},
//             { i: image2},
//             { i: image},
//             { i: image2},
//             { i: image},
//             { i: image},
//             { i: image2}
           
//         ];
    
//         return (
//             <FlatListContainer style={{marginLeft:3}} title="Album">
//                 <FlatList
//                 horizontal
//                 data={DATA}
//                 showsHorizontalScrollIndicator={false}
//                 renderItem={({ item }) => <ForModal i ={item.i}>
//                 </ForModal>}
//                 />
                
                
                
//             </FlatListContainer>
//         )
//     }
// }


import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { ThemeColor } from '../assets/Colors/Colors';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{backgroundColor:"yellow"}}>

<View style={{marginTop: 22}}>
       
       <Modal
          
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

        <View style={{flex: 1,backgroundColor:"rgba(0,0,0,0.5)", flexDirection:"column", justifyContent: 'center',alignItems:"center"}}>
        
            <View style={{backgroundColor:"white" ,borderWidth:2}} >
              <Text>Rating Wala Component</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
               <View style={{ alignSelf:"center"}}>
               <Text style={{backgroundColor: "grey", textAlign:"center"}}>Done</Text>
               
               </View>
              </TouchableHighlight>
            </View>
          </View>
          

        </Modal>
     

                
        <View>
        <TouchableHighlight
          style={{backgroundColor:"red"}}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        </View>
      </View>

      </View>
    );
  }
}