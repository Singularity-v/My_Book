import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Scroll } from 'react-native';
import bookData from "../json/books";

const AlbumList = () => {
    return (
    <ScrollView >
        <View style={{flex:1}}>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.rowStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.book}>
                    <Image
                    source={{
                        uri: bookData[0].image
                    }}
                    style={styles.bookimageStyle}/>
                </View>

                <View style={styles.headerContentStyle}>
                    <Text style = {styles.titleStyle}>{bookData[0].title}</Text>
                    <Text style = {styles.writerStyle}>{bookData[0].writer}</Text>
                    <Text style = {styles.grayStyle}>{bookData[0].intro}</Text>
                    <View>                    
                    <View style = {styles.lineStyle} />
                    <View style = {styles.lineStyle1} />
                    </View>
                    <Text style = {styles.grayStyle}>50% completed</Text>
                </View>
            </View>
        </View>
        
        <View style={styles.cardContainerStyle}>
            <View style={[styles.rowStyle,
            styles.cardSectionStyle
            ]}>

                <View style={styles.book}>
                <Image
                source={{
                    uri: bookData[1].image
                }}
                style={styles.bookimageStyle}/>
                </View>
                
                <View style={styles.headerContentStyle}>
                    <Text style = {styles.titleStyle}>{bookData[1].title}</Text>
                    <Text style = {styles.writerStyle}>{bookData[1].writer}</Text>
                    <Text style = {styles.grayStyle}>{bookData[1].intro}</Text>
                    <View style = {styles.lineStyle} />
                    <Image
                    source={{
                        uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/Asset/btn_start%20read.png?token=ALVUIA7IPAOSPI276Z5EO4C6SMU24"
                    }}
                    style={{width:98,height:25,marginLeft:-7}}/>
                </View>
            </View>
        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.rowStyle,
            styles.cardSectionStyle
            ]}>
                <View style={styles.book}>
                <Image
                source={{
                    uri: bookData[2].image
                }}
                style={styles.bookimageStyle}/>
                </View>
                
                <View style={styles.headerContentStyle}>
                    <Text style = {styles.titleStyle}>{bookData[2].title}</Text>
                    <Text style = {styles.writerStyle}>{bookData[2].writer}</Text>
                    <Text style = {styles.grayStyle}>{bookData[2].intro}</Text>
                    <View style = {styles.lineStyle} />
                    <Text style = {styles.grayStyle}>50% completed</Text>
                </View>
            </View>
        </View>
        </View>
    </ScrollView>





    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth:1,
        borderRadius: 2,
        borderColor: "#ddd",
        width:360,
        height:170,
      },
      cardSectionStyle: {
        width:360,
        height:170,
        backgroundColor:"#f8f8f8",
        borderColor: "#ddd",
        borderBottomWidth: 1,
        paddingTop:12,
        paddingBottom:12,
      },

      bookimageStyle:{
        width:93,
        height:140, 
      },
      book:{
        backgroundColor:"#f8f8f8",
        width:96,
        height:143,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        
        elevation: 5,
      },

      rowStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
      },
      lineStyle:{
        borderWidth: 2,
        borderColor:'#c3c3c3',
        borderRadius:3,
    　},
    lineStyle1:{
        top:-4,
        width:97,
        borderWidth: 2,
        borderColor:'#70b4a1',
        borderRadius:3,
    　},
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width:194,

        marginLeft:28,
        marginRight:24,
        marginTop:16,
      },

      titleStyle:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:18,
        color:"#2e2e2e",

      },
      writerStyle:{
          fontSize:14,
          color:"#717171",
      },
      grayStyle:{
        fontSize:12,
        color:"#b1b1b1",
      }
});

export default AlbumList;