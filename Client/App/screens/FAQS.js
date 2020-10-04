import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import { StatusBar, View, Text} from 'react-native';
import {ThemeColor} from '../assets/Colors/Colors';


const dataArray = [
  { title: "What is your business plan ?", content: "A business plan is a formal written document containing business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved" },
  { title: "How you verify operators ?", content: "the process of establishing the truth, accuracy, or validity of something. the establishment by empirical means of the validity of a proposition. the process of ensuring that procedures laid down in weapons limitation agreements are followed." },
  { title: "Are these tours valid ?", content: "the quality of being logically or factually sound; soundness or cogency. the state of being legally or officially binding or acceptable." },
  { title: "What is your business plan ?", content: "A business plan is a formal written document containing business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved" },
  { title: "How you verify operators ?", content: "the process of establishing the truth, accuracy, or validity of something. the establishment by empirical means of the validity of a proposition. the process of ensuring that procedures laid down in weapons limitation agreements are followed." },
  { title: "Are these tours valid ?", content: "the quality of being logically or factually sound; soundness or cogency. the state of being legally or officially binding or acceptable." }


];

 
export default class FAQS extends Component {
    render() {
      return (
        <Container>
    <StatusBar
    animated={true}
    backgroundColor={ThemeColor}
    barStyle="light-content"
  />
   <View style={{backgroundColor: ThemeColor, height: 40}}>
    <Text
style={{
  alignSelf: 'center',
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
  marginTop: 5,
}}>
FAQs
    </Text>
  </View>
          <Content padder>
            <Accordion
              dataArray={dataArray}
            
              headerStyle={{ backgroundColor: "#aed9f5", borderTopWidth:15, borderTopColor:"white"}}
              contentStyle={{ backgroundColor: "#ddecf8" }}
            />
          </Content>
        </Container>
      );
    }
  }