import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, ScrollView,TouchableOpacity,AsyncStorage } from 'react-native'
import { ThemeColor } from '../assets/Colors/Colors'
import ReviewIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-elements';
import Review from './Review';
import CustomButton from './CustomButton';
import { FlatList } from 'react-native';
import LoadingIndicator from '../components/LoadingIndicator';
import ContentLoader, { Facebook } from 'react-content-loader/native';


export default class OperatorRating extends Component {


    state = {
        reviews: true,
        comment:'',
        ratingValue:2.5,
        id:this.props.screenProps.operatorId
    }

    addReview = async () => {
        const User = JSON.parse(await AsyncStorage.getItem('User'));
        const res = await fetch('https://travelog-adonis.herokuapp.com/api/v1/review/operator',{
          method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${User.token}`,
            },
          body:JSON.stringify({
            operator_id:this.state.id,
            rating:this.state.ratingValue,
            comment: this.state.comment
          })
        })
        const responsejson =  await res.json();
        console.log(responsejson,"response in json");
    
        //Storing data in AsycStorage
        if(res.status === 200){
          console.log("Done");
          alert("Done")
          this.setState({ loading: false});
        }
        else if(res.status === 400 ){
          console.log("FAIL")
          alert("Something Went Wrong");
        }
      } 

    render() {

    console.log(this.state, "YE STATE")
        return (
            this.state.reviews ? 
                <ScrollView nestedScrollEnabled style={{marginTop: '2%', backgroundColor: '#F0F0F0'}}>
                    <View style={{backgroundColor: 'white'}}>
                            <View style={styles.circularRating}>
                                <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center'}}>{this.props.screenProps.numeric_rating ? this.props.screenProps.numeric_rating : 0}</Text>
                            </View>
                            <View style={styles.textRating}>
                                <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>{this.props.screenProps.numeric_rating ? this.props.screenProps.numeric_rating : 0} out of 5</Text>
                            </View>
                            <View style={styles.newReview}>
                                    <Text style={{textAlign: 'center'}}>
                                        Write your review about {this.props.screenProps.name}
                                    </Text>
                                    <Rating 
                                        type = 'custom'
                                        readonly = {false}
                                        showRating = {false}
                                        imageSize = {30}
                                        fractions = {1}
                                        startingValue = "0"
                                        onFinishRating={(numericRating)=> this.setState({ratingValue:numericRating})}
                                        style = {{alignSelf: 'center', marginTop: '2%'}}
                                    />
                            </View>
                            <View style={styles.textReview}>
                                <ReviewIcon style={{color: 'grey', fontSize: 20, alignSelf: 'center'}} name="comment-text"/>
                                <View style={{width: '85%', alignSelf: 'center'}}>
                                    <TextInput onChangeText={(text)=> this.setState({comment:text})} multiline placeholder="Write your review here" style={{marginLeft: '2%', paddingLeft: '2%', padding: 0}}></TextInput>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=> this.addReview()}>
                            <View style={{marginTop: '4%', marginBottom: '3%'}}>
                                <CustomButton
                                    text="Submit"
                                    name="rate-review"
                                />
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <View style={{marginTop: '2%', paddingLeft: '1%'}}>
                            <Text style={{fontSize: 22, fontWeight: '400'}}>Reviews</Text>
                        </View>
                        <FlatList
                            data = {this.props.screenProps.reviewsData}
                            showsScrollIndicator = {false}
                            renderItem = {({item}) => {
                                return  <Review 
                                    reviewer = {item.reviewedBy.first_name && item.reviewedBy.first_name}
                                    rating = {item.rating}
                                    text = {item.comment}
                                    // reviewed = {this.props.screenProps.name}
                                    time = {item.created_at}
                                />
                            }}
                            keyExtractor = {item => item.reviewer}
                            style={{paddingBottom: '1%'}}
                        />
                    </View>
                </ScrollView> :
                <View style={{alignItems: 'center'}}>
                    <ContentLoader height={500}/>
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
