import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native'
import FlatListContainer from '../components/FlatListContainer'
import TourCard from '../components/TourCard'
import {BackgroundColor} from '../assets/Colors/Colors'
import ContentLoader, {Rect, Facebook } from 'react-content-loader/native'

export default class OperatorTours extends Component {

    componentDidMount() {
        //console.log(this.props.screenProps.operatorId)
        fetch(`http://192.168.100.25:3001/tours/filter?operator_id=${this.props.screenProps.operatorId}`)
        .then(response => {
            return response.json()
        })
        .then((responseJson)=> {
            this.setState({
                tours : responseJson
            })
        })
        .catch(err=>console.log('error in operatorTours',err))
    }

    state = {
        tours: undefined
    }

    render() {
        return (
            <View>
                {this.state.tours? 
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
                    <ContentLoader height={700} speed={0.5}>
                        <Rect x="10" y="10" rx="4" ry="4" width="100%" height="100%"/>
                    </ContentLoader>
                </View>
                }
                
            </View>
        )
    }
}
