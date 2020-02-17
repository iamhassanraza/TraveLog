import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';
import NotificationComponent from '../components/NotificationComponent'
import pf from '../assets/images/pf.jpeg'
import a1 from '../assets/images/shan.jpg'
import a2 from '../assets/images/multan.jpg'
import a3 from '../assets/images/gilgit.jpg'
import a4 from '../assets/images/swat.jpg'
import a5 from '../assets/images/hunza.jpg'
import a6 from '../assets/images/im5.jpg'
import {FlatList} from 'react-native-gesture-handler';



export default class Notifications extends Component {
  //   state = {
  //     notification: null,
  //   };

  //   componentDidMount() {
  //     this.getNoti();
  //     console.log('Notifications Agayin');
  //   }

  //   getNoti = async () => {
  //     const Token = await AsyncStorage.getItem('TOKEN');
  //     const user_id = await AsyncStorage.getItem('USER_ID');
  //     const Response = await fetch(
  //       `https://campus-gruv-heroku.herokuapp.com/api/v1/user/notifications?user_id=${user_id}&page=1`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Token}`,
  //         },
  //       },
  //     );
  //     const JsonResponse = await Response.json();
  //     //   console.log('response',JsonResponse,'JsonResponse',Response,'JsonResponse',Response.json())
  //     this.setState({
  //       notification: JsonResponse.data,
  //     });
  //   };

  render() {
    // console.log(this.state.notification, 'this.state.notificate');
    return (
      <View style={{flex: 1}}>
       

        {/* <FlatList
          vertical
          data={this.state.notification}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <NoticationComponent
              uri={item.userNotification.profile_pic_url}
              title={
                item.userNotification.first_name +
                ' ' +
                item.userNotification.last_name
              }
              time="1 hour"
              activity={item.notification_message}></NoticationComponent>
          )}
        /> */}

        <NotificationComponent
          uri={pf}
          title={'PJP tours'}
          time="2-minutes ago"
          activity={'has new tour to Skardu and Hunza'}>
          </NotificationComponent>


          <NotificationComponent
          uri={a2}
          title={'Nomads Adventure'}
          time="47-minutes ago"
          activity={'has new tour to Quetta'}>
          </NotificationComponent>


          <NotificationComponent
          uri={a3}
          title={'Rangoon Wala'}
          time="2-hour ago"
          activity={'has new tour to Hunza'}>
          </NotificationComponent>


          <NotificationComponent
          uri={a4}
          title={'PJP tours'}
          time="13-hours ago"
          activity={'has new tour to Gorakh Hills Sindh'}>
          </NotificationComponent>


          <NotificationComponent
          uri={a5}
          title={'PJP tours'}
          time="20-hours ago"
          activity={'has new tour to Sawat, Kashmir'}>
          </NotificationComponent>
      </View>
    );
  }
}
