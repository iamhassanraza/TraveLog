import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { ThemeColor } from '../assets/Colors/Colors'
import ReviewIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-elements';
import Review from './Review';
import CustomButton from './CustomButton';
import OperatorCard from './OperatorCard';



export default class OperatorRating extends Component {

    state = {
        starrating: 4
    }

    onStarRatingPress(rating) {
        this.setState({
          starrating: rating
        });
      }

    render() {
        return (
            <View style={{marginTop: '2%', backgroundColor: '#F0F0F0', marginBottom: '2%'}}>
                <View style={{backgroundColor: 'white'}}>
                        <View style={styles.circularRating}>
                            <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center'}}>4.8</Text>
                        </View>
                        <View style={styles.textRating}>
                            <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>4.8 out of 5</Text>
                        </View>
                        <View style={styles.newReview}>
                                <Text>Write your review about Nomads Adventure Service</Text>
                                <Rating 
                                    type = 'custom'
                                    readonly = {false}
                                    showRating = {false}
                                    imageSize = {30}
                                    fractions = {1}
                                    startingValue = "0"
                                    style = {{alignSelf: 'center', marginTop: '2%'}}
                                />
                        </View>
                        <View style={styles.textReview}>
                            <ReviewIcon style={{color: 'grey', fontSize: 20, alignSelf: 'center'}} name="comment-text"/>
                            <View style={{width: '85%', alignSelf: 'center'}}>
                                <TextInput multiline placeholder="Write your review here" style={{marginLeft: '2%', paddingLeft: '2%', padding: 0}}></TextInput>
                            </View>
                        </View>
                        <View style={{marginTop: '4%', marginBottom: '3%'}}>
                            <CustomButton
                                text="Submit"
                                name="rate-review"
                            />
                        </View>
                </View>
                <View style={{padding: '1%'}}>
                    <View style={{marginTop: '2%'}}>
                        <Text style={{fontSize: 22, fontWeight: '400'}}>Reviews</Text>
                    </View>
                    <Review />
                    <Review />
                    <Review />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    circularRating: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: '2%',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textRating: {
        marginTop: '1%'
    },
    newReview: {
        marginTop: '3%',
        borderRadius: 5,
        alignSelf: 'center'
    },
    textReview: {
        marginTop: '2%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5
    }
})
