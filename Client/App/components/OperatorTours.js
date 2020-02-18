import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, ScrollView, TouchableWithoutFeedback} from 'react-native'
import FlatListContainer from '../components/FlatListContainer'
import {withNavigation} from 'react-navigation'
import TourCard from '../components/TourCard'
import {BackgroundColor} from '../assets/Colors/Colors'
import ContentLoader, {Rect, Facebook } from 'react-content-loader/native'

class OperatorTours extends Component {

    componentDidMount() {
        fetch(`https://travelog-pk.herokuapp.com/tours/filter?operator_id=${this.props.screenProps.operatorId}`)
        .then(response => {
            return response.json()
        })
        .then((responseJson)=> {
            console.log('response ========= >',responseJson)
            this.setState({
                tours : responseJson
            })
        })
        .catch(err=>console.log('error in operatorTours',err))
    }

    state = {
        tours: [],
        loading: false
    }

    render() {
        return (
                <ScrollView nestedScrollEnabled style={{}}>
                {this.state.tours[0] ? 
                    <FlatListContainer style={{backgroundColor: BackgroundColor}} title="Tours" >
                        <FlatList
                        data={this.state.tours}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => 
                            <TourCard 
                                navigation={this.props.screenProps.navigation}
                                style={{borderWidth: 0, width: Dimensions.get('window').width/1, marginBottom: '8%', paddingLeft: '3%', paddingRight: '3%'}}
                                id={item.tour_id}
                                seatsLeft={10}
                            >
                            </TourCard>}
                        keyExtractor={item => item.tour_id}
                        />
                    </FlatListContainer> :
                    <View style={{alignSelf:'center'}}>
                        <ContentLoader height={Dimensions.get('window').height*1} speed={0.5}/>
                    </View>
                }
                </ScrollView>
            
        )
    }
}

export default withNavigation(OperatorTours)
