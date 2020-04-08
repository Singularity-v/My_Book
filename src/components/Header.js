import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums</Text> 
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#EBDDC7',
      alignItems: 'center',
      justifyContent: 'center',
      height:70,
      paddingTop:30,
      shadowColor:"#000",
      shadowOffset:{width:0,height:4},
      shadowOpacity:0.2,
      elevation:2
    },
    textStyle: {
    　fontSize: 20,
    },
});

export default Header;