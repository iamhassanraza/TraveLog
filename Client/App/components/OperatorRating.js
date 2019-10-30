import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import StarRating from 'react-native-star-rating'
import { ThemeColor } from '../assets/Colors/Colors'
import ReviewIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-elements';
import OperatorCard from './OperatorCard';
import CustomButton from './CustomButton';



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
            <View style={{marginTop: '5%', backgroundColor: 'white', padding: '2%'}}>
                    <View style={styles.circularRating}>
                        <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center'}}>4.8</Text>
                    </View>
                    <View style={styles.textRating}>
                        <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>4.8 out of 5</Text>
                    </View>
                    <View style={{}}>
                        {/* <StarRating
                            disabled = {false}
                            halfStarEnabled = {true}
                            maxStars = {5}
                            rating = {this.state.starrating}
                            fullStarColor = {ThemeColor}
                            starSize = {20}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            containerStyle = {{width: '30%', alignSelf: 'center'}}
                        /> */}
                        
                    </View>
                    <View style={styles.newReview}>
                            <Text>Write your review about Nomads Adventure Society</Text>
                            <Rating 
                                type = 'custom'
                                readonly = {false}
                                showRating = {false}
                                imageSize = {30}
                                fractions = {1}
                                startingValue = "0"
                                style = {{alignSelf: 'center', marginTop: '4%'}}
                            />
                    </View>
                    <View style={styles.textReview}>
                        <ReviewIcon style={{alignSelf: 'center',color: 'grey', fontSize: 20}} name="comment-text"/>
                        <View style={{width: '85%', alignSelf: 'center'}}>
                            <TextInput multiline placeholder="Write your review here" style={{marginLeft: '2%',borderWidth: 0.2,paddingLeft: '2%', padding: 0}}></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop: '3%', marginBottom: '1%'}}>
                        <CustomButton
                            text="Submit"
                            name="rate-review"
                        />
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
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textRating: {
        marginTop: '1%'
    },
    newReview: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '3%',
        padding: '1%',
        borderRadius: 5
    },
    textReview: {
        marginTop: '4%',
        alignSelf: 'center',
        flexDirection: 'row',
    }
})
