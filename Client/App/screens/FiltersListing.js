import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';


class SearchBar extends React.PureComponent {
    state = {
      selected:""
    }

    renderDestinations = () => {
        
            return <Text>Ali</Text>
        
    }


    renderTours = () => {
       
            return <Text>Tours</Text>
        
        
    }

    renderOperators = () => {
       
            return <Text>Operators</Text>
        
        
    }

    changeState = (type) => {
        this.setState({
            selected: type
        });
    }

  

    render() {
        console.log(this.state.selected);
        return (
            <View >
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={()=> {this.changeState("destinations")}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="map-marker-radius" style={{ fontSize: 16, margin: 10 }} />
                            <Text style={{ borderRightColor: 'gray', borderRightWidth: 0.5, paddingRight: 10 }}>Destinations</Text>
                        </View>
                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={() => {this.changeState("tours")}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="van-passenger" style={{ fontSize: 16, margin: 10 }} />
                            <Text style={{ borderRightColor: 'gray', borderRightWidth: 0.5, paddingRight: 10 }}>Tours</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => {this.changeState("operators")}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="shopping" style={{ fontSize: 16, margin: 10 }} />
                            <Text style={{ paddingRight: 10 }}>Operators</Text>
                        </View>
                    </TouchableWithoutFeedback>
                   
                </View>
                
                {this.state.selected === "destinations" ? this.renderDestinations()  : null}
                {this.state.selected === "tours" ? this.renderTours() : null}
                {this.state.selected === "operators" ? this.renderOperators() : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        height: 50,
        margin: 10,
   justifyContent:"center",
        borderTopColor: 'black',
        borderBottomColor: 'black',
        elevation: 3,
        backgroundColor:'white'
    }
});


export default SearchBar;