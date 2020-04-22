import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View ,Image } from "react-native";

import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';

import { Tile } from 'react-native-elements';

import Header from "./src/components/Header";
import BookList from "./src/components/BookList";
import BottomNaver from "./src/components/BottomNaver";
import Home from "./src/components/Home";


const Drawer = createDrawerNavigator();

const Book = () => {
  return (
    <View>
      <Header />
      <BookList />
      <BottomNaver />
    </View>
  );
};
const HomeStack = () => {
  return (
    <View>
      <Header />
      <Home />
      <BottomNaver />
    </View>
  );
};

const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop: -28,}} {...rest}>
      <View style={{
        width:306,
        height:190,
        marginBottom:4,
      }}>
        <View>
          <Tile
            imageSrc={{ uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/img_user_photo.png?token=ALVUIA7RTQSNGNFGQ77UNVS6SW6NS"}}
            imageContainerStyle={{height:70, width:70, }}
            containerStyle={{
              backgroundColor:"#00b49f",
              width:306,
              height:190,
              flexDirection:'row',
              alignItems: 'center',
              justifyContent:'space-between',
              padding:16,
            }}
            featured
          />
          <View style={{
            flexDirection:"row",
            marginTop:-40,
          }}>
            <View style={{
                  flexDirection:'column',
                  alignItems: 'flex-start',
                  justifyContent:'space-around',
                  width:230,
                  marginLeft:16,
                  marginTop:-5,
            }}>
              <Text style={{         
                  color:"#ffffff",
                  fontSize:14,
                  fontFamily:"Roboto",
                  fontWeight:"bold",
                  width:230,
                  top:-4,
                  height:null }}>GamexHCl</Text>
                <Text style={{       
                  fontSize:14,
                  fontWeight:"bold",
                  width:230, 
                  height:null,
                  color:"#ffffff",}}>gdlab2017@gmail.com</Text>
            </View>
            <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_down_arrow.png?token=ALVUIA2M67EHEBXLY2RXM626SW7GO"
                }}
                style={{        
                  width:24,
                  height:24,
                  right:-25
                  }}
              />
          </View>
        </View>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerStyle={{ width: 306}}
        drawerContentOptions={{
          activeBackgroundColor: '#00b49f',
          activeTintColor:'#fff',
          itemStyle: { marginLeft: 0, marginRight: 0,marginTop: 0,borderRadius:0 },
          labelStyle: { fontSize: 14,fontWeight:"bold", },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <View style={{
                  alignItems: 'flex-start',
                  justifyContent:"center",
                  paddingLeft:24,
                  height:54,

                }}>
                <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_home.png?token=ALVUIAYEBH6LP4EV5RF6OCK6SXCPQ"
                }}
                style={{ width:24, height:24}}
                />
                </View>
              ),            
            }
          }
          />
        <Drawer.Screen 
          name="My Book" 
          component={Book} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <View style={{
                  alignItems: 'flex-start',
                  justifyContent:"center",
                  paddingLeft:24,
                  height:54,
                }}>
                <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_mybook.png?token=ALVUIA3VGYCLGQLFAVNETJC6SXDIY"
                }}
                style={{ width:24, height:24}}
                />
                </View>
              ),            
            }
          }
        />    
        <Drawer.Screen 
          name="Favorites" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <View style={{
                  alignItems: 'flex-start',
                  justifyContent:"center",
                  paddingLeft:24,
                  height:54,
                }}>
                <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_favorites.png?token=ALVUIAY2X5LT6WQIB22JQXK6SXDQ6"
                }}
                style={{ width:24, height:24}}
                />
                </View>
              ),            
            }
          }
        />  
         <Drawer.Screen 
          name="Settings" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <View style={{
                  alignItems: 'flex-start',
                  justifyContent:"center",
                  paddingLeft:24,
                  height:54,
                }}>
                <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_setting.png?token=ALVUIAYVICINEEMB7K7WU7C6SXDNO"
                }}
                style={{ width:24, height:24}}
                />
                </View>
              ),            
            }
          }
        />  
        <Drawer.Screen 
          name="About us" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <View style={{
                  alignItems: 'flex-start',
                  justifyContent:"center",
                  paddingLeft:24,
                  height:54,
                }}>
                <Image 
                source={{
                    uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_aboutus.png?token=ALVUIAYS7FIMKD7ACJNXQBK6SXDO2"
                }}
                style={{ width:24, height:24}}
                />
                </View>
              ),            
            }
          }
        /> 
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
