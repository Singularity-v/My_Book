import React from "react";
import { StyleSheet, Text, View ,Image } from "react-native";
import Header from "./src/components/Header";
import BookList from "./src/components/BookList";
import BottomNaver from "./src/components/BottomNaver";
import Drawer from "./src/components/Drawer";
import Black from "./src/components/black";


const App = () => {
  return (
    <View style={{flex: 1}}>
      
      <Header />
      <BookList />
      <BottomNaver/> 
      <Black /> 
      <Drawer />
      
    </View>
  );
};

export default App;
