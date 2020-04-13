import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const BottomNaver = () => {
  return (
    <View style={styles.viewStyle}>
        <View style={styles.box}>
            <View style={styles.center}>
                <Image style={styles.Home} source={require('./img/3.png')}/>
                <Text style={styles.word}>Home</Text>
            </View>
            <View style={styles.center}>
                <Image style={styles.book} source={require('./img/2.png')}/>
                <Text style={styles.word}>My book</Text>
            </View>
            <View style={styles.center}>
                <Image style={styles.Favorites} source={require('./img/1.png')}/>
                <Text style={styles.word}>Favorites</Text>
            </View>
        </View>
    </View>
   );
 };

 const styles = StyleSheet.create({
    viewStyle: {
        elevation:2,
    },
    box:{
        backgroundColor:'#ffffff',
        height:80,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        top:10,
        zIndex:2,
        paddingBottom:15
    },
    word:{
        fontFamily:'Roboto',
        fontSize:16,
        color:'#818181',
        lineHeight:20,
        
    },
    Home:{
        width:40,
        height:40,
    },
    book:{
        width:40,
        height:40,
    },
    Favorites:{
        width:40,
        height:40,
   },
   center:{
    alignItems: 'center',
    justifyContent:'center',
   },

 });

 export default BottomNaver;