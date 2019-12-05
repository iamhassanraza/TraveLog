import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native'
import FlatListContainer from '../components/FlatListContainer'
import TourCard from '../components/TourCard'
import {BackgroundColor} from '../assets/Colors/Colors'
import ContentLoader, {Rect, Facebook } from 'react-content-loader/native'

export default class OperatorTours extends Component {

    componentDidMount() {
        fetch(`http://192.168.100.25:3001/tours/filter?operator_id=${this.props.screenProps.operatorId}`)
        .then(response => {
            return response.json()
        })
        .then((responseJson)=> {
            console.log(responseJson)
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
            <View>
                {this.state.tours[0] ? 
                <FlatListContainer style={{backgroundColor: BackgroundColor}} title="Tours" >
                    <FlatList
                    data={this.state.tours}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard 
                    style={{borderWidth: 0, width: Dimensions.get('window').width/1, marginBottom: '8%', paddingLeft: '3%', paddingRight: '3%'}}
                    id={item.tour_id}
                    seatsLeft={10} ></TourCard>}
                    keyExtractor={item => item}
                    />
                </FlatListContainer> :
                <View style={{alignSelf:'center'}}>
                    <ContentLoader height={500} speed={0.5}/>
                </View>
                }
                
            </View>
        )
    }
}
