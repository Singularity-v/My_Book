import React from "react";
import { StyleSheet, Text, View ,Image } from "react-native";

const Drawer = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.blackStyle}>
        <View style={styles.topboxStyle}>
          <View style={styles.leftStyle}>
            <Image
                      style={styles.headStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/img_user_photo.png?token=ALVUIA7RTQSNGNFGQ77UNVS6SW6NS"}}
            />
            <View>
            <Text style={styles.top_text_1Style}>GamexHCl</Text>
            <Text style={styles.top_textStyle}>gdlab2017@gmail.com</Text>
            </View>
            </View>
          
          <Image
                      style={styles.icon_topStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_down_arrow.png?token=ALVUIA2M67EHEBXLY2RXM626SW7GO"}}
            />
        </View>
        <View style={styles.bottomboxStyle}>
          <View style={styles.boxStyle}>
          <Image
                      style={styles.iconStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_home.png?token=ALVUIAYEBH6LP4EV5RF6OCK6SXCPQ"}}
            />
            <Text style={styles.textStyle}>Home</Text>
          </View>
        </View>
        <View style={styles.bottomboxStyle}>
          <View style={styles.boxStyle}>
          <Image
                      style={styles.iconStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_mybook.png?token=ALVUIA3VGYCLGQLFAVNETJC6SXDIY"}}
            />
            <Text style={styles.textStyle}>My Book</Text>
          </View>
        </View>
        <View style={styles.bottomboxStyle}>
          <View style={styles.boxStyle}>
          <Image
                      style={styles.iconStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_favorites.png?token=ALVUIAY2X5LT6WQIB22JQXK6SXDQ6"}}
            />
            <Text style={styles.textStyle}>Favorites</Text>
          </View>
        </View>
        <View style={styles.bottomboxStyle}>
          <View style={styles.boxStyle}>
          <Image
                      style={styles.iconStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_setting.png?token=ALVUIAYVICINEEMB7K7WU7C6SXDNO"}}
            />
            <Text style={styles.textStyle}>Settings</Text>
          </View>
        </View>
        <View style={styles.bottomboxStyle}>
          <View style={styles.boxStyle}>
          <Image
                      style={styles.iconStyle}
                      source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/icon_drawer_aboutus.png?token=ALVUIAYS7FIMKD7ACJNXQBK6SXDO2"}}
            />
            <Text style={styles.textStyle}>About us</Text>
          </View>
        </View>
        
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position:"absolute",
    backgroundColor:'#4d000000',
    zIndex:10,
    elevation:10,
},
  blackStyle: {
    backgroundColor:'#ebebeb',
    width:304,
    height:640,
    alignItems: 'center',
    justifyContent:"flex-start",
    zIndex:2
  },

  topboxStyle:{
    backgroundColor:"#00b49f",
    width:306,
    height:204,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding:16,
  },
  leftStyle:{
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent:'space-around',
    width:230,
    height:140,
    top:25
  },
  icon_topStyle:{
    width:24,
    height:24,
    top:55,
  },
  headStyle:{
    width:70,
    height:70
  },
  top_text_1Style:{
    color:"#ffffff",
    fontSize:14,
    fontFamily:"Roboto",
    fontWeight:"bold",
    lineHeight:20,
    width:230,
    height:null
  },
  top_textStyle:{
    color:"#ffffff",
    fontSize:14,
    fontFamily:"Roboto",
    lineHeight:20,
    width:230,
    height:null
  },

  bottomboxStyle:{
    width:306,
    alignItems: 'flex-start',
    paddingLeft:24,
  },
  boxStyle:{
    height:54,
    flexDirection:"row",
    alignItems: 'center',
  },
  iconStyle:{
    width:24,
    height:24,
    marginRight:32
  },
  textStyle:{
    color:"#5c5c5c",
    fontSize:14,
    fontFamily:"Roboto",
    fontWeight:"bold",
    lineHeight:20,
    width:230,
    height:null
  },
});

export default Drawer;
