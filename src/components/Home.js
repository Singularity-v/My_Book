import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const MybookDetail = () => {
  return (
   <View style={styles.cardContainerStyle}>
        <Image
            style={styles.imgStyle}
            source={{uri:"https://pm1.narvii.com/7140/ef8b72af3fa565f82d9a2baebb4fbf347802a49br1-1241-1920v2_uhq.jpg"}}
        />
   </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderColor: "#ddd",
    height:508,
    justifyContent:"center",
    alignItems:"center"
  },
  imgStyle:{
    width:310,
    height:450
  },
});

export default MybookDetail;