import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
 '../assets/images/is1.jpg'
 '../assets/images/is2.jpg'
 '../assets/images/is3.jpg'
 '../assets/images/is4.jpg'




export default class Slider extends Component {



  render() {
    const images = [
        'https://pakistantourntravel.com/wp-content/uploads/2018/03/12494-naran-kaghan-waterfalls-pakistan-1680x1050-nature-wallpaper.jpg',
        'https://www.nationalgeographic.com/content/dam/travel/2018-digital/wild-beautiful-pakistan/kaghan-valley-swat-pakistan.jpg',
        'https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Shangrila%2C_Lower_Kachura_Lake.jpg/1200px-Shangrila%2C_Lower_Kachura_Lake.jpg',
        'https://seepakistantours.com/wp-content/uploads/2017/10/Beautiful-Neelum-Valley.jpg'
    ];
   return(
    <SliderBox
    autoplay
    circleLoop
    images={images} />
   )
    
    // </TouchableOpacity>:null
  }
}
