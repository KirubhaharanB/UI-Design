/* eslint-disable prettier/prettier */
import React from 'react';
 import { Text, StyleSheet, View } from 'react-native';
 const Footer = props => {
     return (
         <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
        </View>
     );
     };


 const styles = StyleSheet.create({
    footer:{
        width:'100%',
        height:'20%',
        paddingTop:5,
        justifyContent:'center',
        backgroundColor:'yellow',
        alignItems:'center',

    },
    footerText:{
        fontSize:18,
        color:'black',

    },
 }
 );
 export default Footer;
