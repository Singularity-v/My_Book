import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking,Image,Button } from 'react-native';


const Header = () => {
    return (
    <View style={styles.viewStyle}>
        <View style={styles.headerStyle}>
        <TouchableOpacity 
            onPress={() =>navigate('Account')}>
        <Image
            source={{
                uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_navbar_mobile.png?token=ALVUIA43F3DNW6CCOC6C3R26SWFZG"
            }}
            style = {styles.ImageClass}/>
        </TouchableOpacity>
        <Text style={styles.textStyle}>My Book</Text> 
        <TouchableOpacity 
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dqRZDebPIGs")}>
        <Image
            source={{
                uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_search.png?token=ALVUIAZW4UUEE3KLYKKPS5S6SSAZC"
            }}
            style = {styles.ImageClass}/>
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
    　zIndex:0,
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
        justifyContent: 'space-between',
        flexDirection: "row",

        width:344,
        height:40
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