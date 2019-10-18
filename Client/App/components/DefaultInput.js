import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => (

    <TextInput    
        style={[styles.input, props.style]}
        underlineColorAndroid="transparent" 
        {...props}
    />

);

const styles = StyleSheet.create({
    input: {
        width:"100%",
        borderColor: "#3399FF",
        padding: 5,
        margin: 5,
        borderBottomWidth:1,
        alignItems: "center"
    }
});

export default DefaultInput;  