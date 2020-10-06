import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions, ScrollView, TouchableWithoutFeedback,AsyncStorage} from 'react-native'
import FlatListContainer from '../components/FlatListContainer'
import {withNavigation} from 'react-navigation'
import TourCard from '../components/TourCard'
import {BackgroundColor} from '../assets/Colors/Colors'
import ContentLoader, {Rect, Facebook } from 'react-content-loader/native'

class OperatorTours extends Component {

    componentDidMount() {
        this.fetchTours();
    }


    
  fetchTours = async () => {
    const User = JSON.parse(await AsyncStorage.getItem('User'));
    console.log(typeof User.token, 'TOKEN');
    fetch(
      `https://travelog-adonis.herokuapp.com/api/v1/search/user?type=post&user_id=${this.props.screenProps.user_id}&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${User.token}`,
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          refreshing: false,
          tours: responseJson.data,
          toursLoading: false,
        });
      })
      .catch(err => console.log(err, 'ERRRRRRRRRRRRRRRRRR'));
  };

    state = {
        tours: [],
        loading: false
    }

    render() {
        console.log(this.props.screenProps.user_id,"AsaTT")
        return (
                <ScrollView nestedScrollEnabled style={{}}>
                {this.state.tours ? 
                    <FlatListContainer style={{backgroundColor: BackgroundColor}} title="Tours" >
                        <FlatList
                        data={this.state.tours}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => 
                            <TourCard 
                                navigation={this.props.screenProps.navigation}
                                style={{borderWidth: 0, width: Dimensions.get('window').width/1, marginBottom: '8%', paddingLeft: '3%', paddingRight: '3%'}}
                                id={item.id}
                                seatsLeft={10}
                                title={item.title}
                                price={item.price}
                                departure_date={item.departure_date}
                                number_of_days={item.number_of_days}
                                speciality={item.speciality}
                                operator={
                                  item.users.first_name + ' ' + item.users.last_name
                                }
                                photoUrl={item.postDetail[0].image_url && item.postDetail[0].image_url}
                                wholeData={item}
                                saved={item.userSavedPost.length > 0 ? true : false}
                            >
                            </TourCard>}
                        keyExtractor={item => item.id}
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
