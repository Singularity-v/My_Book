import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const BottomNaver = () => {
  return (
    <View style={styles.viewStyle}>
        <View style={styles.box}>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_bottomnav_home.png?token=ALVUIA7MWPL6EGSM24NI66K6SSAVO"}}
            />
                <Text style={styles.word}>Home</Text>
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_bottomnav_mybook_selected.png?token=ALVUIA5EJ4NBXLR6N35K43C6SSAS6"}}
            />
                <Text style={styles.word}>My book</Text>
            </View>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_bottomnav_favorites.png?token=ALVUIA6XHPXAYXF22JT2AFK6SSAXA"}}
            />
                <Text style={styles.word}>Favorites</Text>
            </View>
        </View>
    </View>
   );
 };

 const styles = StyleSheet.create({
    viewStyle: {
        elevation:2,
        backgroundColor:"black",

    },
    box:{
        backgroundColor:"#ffffff",
        height:56,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        zIndex:2,

    },
    word:{
        fontFamily:'Roboto',
        fontSize:12,
        color:'#818181',
        lineHeight:20,
    },
    iconStyle:{
        width:24,
        height:24,
    },
   center:{
    alignItems: 'center',
    justifyContent:'center',
   },

 });

 export default BottomNaver;