import React, { Component } from 'react'
import { Text, View,ScrollView, StyleSheet, TextInput } from 'react-native'
import StarRating from 'react-native-star-rating'
import { ThemeColor } from '../assets/Colors/Colors'
import ReviewIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Rating, AirbnbRating } from 'react-native-elements';



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
            <ScrollView style={{marginTop: '5%'}}>
                <View style={{flex: 1}}>
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
                                showRating
                                fractions = {1}
                                startingValue = "0"
                                style = {{alignSelf: 'center', marginTop: '4%'}}
                            />
                    </View>
                </View>
            </ScrollView>
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
        marginTop: '3%'
    },
    textReview: {
        marginTop: '6%',
        flexDirection: 'row'
    }
})
