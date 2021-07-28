/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,StyleSheet,Dimensions,Image,ImageBackground} from 'react-native';
 
const Screen = () => {
    return (
        <React.Fragment>
        <View style ={styles.container}>
            <ImageBackground
            source={require('../assets/beach.png')} 
            style ={styles.image}
            resizeMode="stretch">
            <Text style={styles.head}>This is my trip in the nutshell</Text>
            </ImageBackground>
        </View>
        <View style={styles.total}>
        <View style={styles.bottom}>
            <Image
                source={require('../assets/img.png')}
                style={styles.user}
            />
            <Text style={styles.blinc}>blinctrip</Text>
        </View>
        <View>
            <Text style={styles.text1}>I have flown</Text>
        </View>
        <View style={styles.kms}>
            <Text style={styles.flown}>10,545</Text>
            <Text style={styles.flow}>kms</Text>
            <Text style={styles.flown}>|</Text>
            <Text style={styles.flown}>345</Text>
            <Text style={styles.flow}>hrs</Text>
        </View> 
        <View>
            <Text style={{textAlign:'center', color:'white'}}>_____________________________________________________</Text>
        </View>       
        </View>
        <View style ={styles.sep}>
        <View style={styles.last}>
        <Text style={styles.circle}>14</Text>
        <Text style={styles.circle}>20</Text>
        <Text style={styles.circle}>30</Text>
        <Text style={styles.circle}>45</Text>
        </View>
        <View style={styles.texts}>
        <Text style={styles.cc}>countries visited</Text>
        <Text style={styles.cc}>cities visited</Text>
        <Text style={styles.cc}>airlines flown</Text>
        <Text style={styles.cc}>trips taken</Text>
        </View>
        </View>
        </React.Fragment>
  );
};
const {height} = Dimensions.get('screen');
const height_logo = height * 0.50;

const styles = StyleSheet.create({
    container:{
        flex:4,
        backgroundColor:'red',
    },
    image:{
        width:height_logo,
        height:height_logo,
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor:'grey',
    },
    content:{
        marginBottom:50,
    },
    user:{
        width:75,
        height:75,
        borderRadius:34,
        borderWidth:2,
        marginBottom:20,
        marginLeft:15,
        
    },
    kms:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        marginTop:15,
        marginBottom:10,
        backgroundColor:'grey',
        fontSize:50,
    },
    blinc:{
        textAlign:'right',
        justifyContent:'flex-end',
        marginRight:20,
        fontSize:25,
        padding:5,
        color:'white',
    },
    last:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'grey',
    },
    sep:{
        flex:2,
    },
    t1:{
        marginLeft:15,
        flexDirection:'column',
    },
    v1:{
        flexDirection:'column',

    },
    total:{
        flex:3,
        //flexDirection:'row',
        //justifyContent:'space-between',
        marginTop:10,
        //marginBottom:20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor:'grey',
    },
    flown:{
        marginBottom:20,
        marginLeft:10,
        fontSize:35,
        color:'white',
        textAlign:'left',
        justifyContent:'flex-end',
        fontWeight:'bold',
    },
    flow:{
        marginTop:15,
        marginLeft:5,
        fontSize:20,
        color:'white',
        justifyContent:'flex-start',
    },
    text1:{
        marginBottom:10,
        fontSize:18,
        color:'white',
        marginLeft:27,
    },
    circle:{
        width:75,
        height:75,
        borderRadius:39,
        borderWidth:2,
        padding:20,
        borderColor:'white',
        marginBottom:10,
        marginLeft:15, 
        marginTop:10,
        marginRight:15,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'space-evenly',
        alignItems:'center',
        color:'white',
    },
    texts:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexShrink:1,
        backgroundColor:'grey',
    },
    cc:{
        color:'white',
        flex:1,
        flexWrap:'wrap',
        marginLeft:25,
        marginRight:10,
        marginBottom:20,
    },
    head:{
        color:'white',
        shadowColor:'black',
        shadowOpacity:100,
        shadowOffset:{width:0,height:2},
        shadowRadius:100,
        elevation:50,
        marginTop:70,
        marginLeft:10,
        flex:1,
        flexWrap:'wrap',
        fontSize:35,
    },  
});

export default Screen;
