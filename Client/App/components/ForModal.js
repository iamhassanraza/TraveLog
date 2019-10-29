// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert,Dimensions, Butto, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
// import image from "../assets/images/1.jpg";
// import image2 from "../assets/images/2.jpg";
// import GallerySwiper from "react-native-gallery-swiper";

// export default class ModalMera extends Component {
//   state = {
//     modalVisible: false],
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//    return (
      

// <View style={{ backgroundColor:'black',height:'100%',marginTop:22}}>
//         <Modal
//           animationType="fade"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableWithoutFeedback
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             <View style={{ width: '100%', height: 400, marginTop: 10,marginHorizontal:10  ,flexDirection: "row", }}>
            
//                      <Image
//                       source={image}
//                       style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height,marginRight:5 }}
//                     />
//                     <Image
//                       source={image2}
//                       style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height,marginRight:5 }}
//                     />
//                     <Image
//                       source={image2}
//                       style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height,marginRight:5 }}
//                     />
//                   </View>
                 
//                   </ScrollView >
//               </TouchableWithoutFeedback>
//             </View>
//           </View>
//         </Modal>

//         <TouchableWithoutFeedback
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>


//           {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             <View style={{ width: '100%', height: 400, marginTop: 10,marginHorizontal:10  ,flexDirection: "row", }}>
            
//                      <Image
//                       source={image}
//                       style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height,marginRight:5 }}
//                     />
                  
                  
//                          <Image
//                       source={image2}
//                       style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height,marginRight:5 }}
//                     />
//                   </View>
//                   </ScrollView > */}

          
//         </TouchableWithoutFeedback>

//       </View>
//     );
//   }}





