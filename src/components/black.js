import React from "react";
import { StyleSheet,  View} from "react-native";

const Black = () => {
  return (
    <View style={styles.blackStyle}>
        
    </View>
  );
};

const styles = StyleSheet.create({
    blackStyle:{
        position:"absolute",
        width:360,
        height:640,
        backgroundColor:"#666666",
        opacity:0.5,
        elevation:5,
    },
});

export default Black;