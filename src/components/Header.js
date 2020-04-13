import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking,Image } from 'react-native';


const Header = () => {
    return (
    <View style={styles.viewStyle}>
        <View style={styles.headerStyle}>
        <TouchableOpacity 
            onPress={() => Linking.openURL("https://reactnative.dev/docs/linking#openurl")}>
        <Image
            source={{
                uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_navbar_mobile.png?token=ALVUIA5HZOYHR2XVZ57WVPC6SRNGK"
            }}
            style = {styles.ImageClass}/>
        </TouchableOpacity>
        <Text style={styles.textStyle}>My Book</Text> 
        <TouchableOpacity 
            onPress={() => Linking.openURL("https://reactnative.dev/docs/linking#openurl")}>
        <Image
            source={{
                uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_search.png?token=ALVUIA7MLEGUWE7LTPTS3BK6SRNCQ"
            }}
            style = {styles.ImageClass}/>
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
    　flex:1,
      backgroundColor: '#00b49f',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      height:80,
      paddingTop:16,

      shadowColor:"#4d000000",
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.2,

      elevation:2
    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor:'black',
        width:null,height:40
    },
    ImageClass:{
        width:40,
        height:40,
    },
    textStyle: {
    　fontSize: 20,
    　fontFamily:"Roboto",
    　fontWeight:"bold",
    　color:"#ffffff",
    　lineHeight:24,
    },
});

export default Header;