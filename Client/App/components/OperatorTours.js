import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import FlatListContainer from '../components/FlatListContainer'
import TourCard from '../components/TourCard'

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
                <FlatListContainer style={{marginLeft:'3%'}} title="Popular Tours">
                    <FlatList
                    horizontal
                    data={this.state.tours}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TourCard style={{marginRight:10}}
                    id={item}
                    seatsLeft={10} ></TourCard>}
                    keyExtractor={item => item}
                    />
                </FlatListContainer>
            </View>
        )
    }
}
