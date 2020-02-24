import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import IconWithText from '../components/IconWithText'


export default class Settings extends Component {
    render() {
        return (
            <ScrollView>

<View style={{marginLeft:"8%", marginTop:"5%"}}>

<IconWithText icon="phone" title="Contact Us" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>
<IconWithText icon="phone" title="Terms & Conditions" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>
<IconWithText icon="phone" title="Help" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>
<IconWithText icon="phone" title="Support" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>
<IconWithText icon="phone" title="Change Password" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>
<IconWithText icon="phone" title="Logout" iconstyle={styles.IconStyle} textstyle={styles.TextStyle}></IconWithText>

</View>


            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    IconStyle: {
        fontSize:26,paddingTop:5
    },
    TextStyle:{
fontSize:29
    }
})