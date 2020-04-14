import React from "react";
import { View} from "react-native";
import Header from "./src/components/Header";
import BookList from "./src/components/BookList";
import BottomNaver from "./src/components/BottomNaver";


const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <BookList />
      <BottomNaver />
      
    </View>
  );
};

export default App;
