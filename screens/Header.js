/* eslint-disable prettier/prettier */
import React from 'react';
 import { Text, StyleSheet, View } from 'react-native';
 const Header = props => {
     return (
         <View style={styles.header}>
            <Text style={styles.headerText}>This is my trip in nutshell</Text>
        </View>
     );
     };


 const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'70%',
        paddingTop:36,
        justifyContent:'center',
        backgroundColor:'red',
        alignItems:'center',

    },
    headerText:{
        fontSize:18,
        color:'black',

    },
 }
 );
 export default Header;
