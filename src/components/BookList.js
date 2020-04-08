import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import albumData from "../json/albums";

const AlbumList = () => {
    return (
    <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: albumData[0].thumbnail_image
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >{albumData[0].title}</Text>
                <Text >{albumData[0].artist}</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: albumData[0].image
                }}
                />
            </View>   
        </View>
        
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: albumData[1].thumbnail_image
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >{albumData[1].title}</Text>
                <Text >{albumData[1].artist}</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: albumData[1].image
                }}
                />
            </View>   
        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: albumData[2].thumbnail_image
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >{albumData[2].title}</Text>
                <Text >{albumData[2].artist}</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: albumData[2].image
                }}

                />
            </View>   

        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: albumData[3].thumbnail_image
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >{albumData[3].title}</Text>
                <Text >{albumData[3].artist}</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: albumData[3].image
                }}

                />
            </View>   

        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: albumData[4].thumbnail_image
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >{albumData[4].title}</Text>
                <Text >{albumData[4].artist}</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri:albumData[4].image
                }}

                />
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
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10
      },
      cardSectionStyle: {
        padding: 5,
        backgroundColor: "#C1D3D4",
        borderColor: "#ddd",
        borderBottomWidth: 1,
      },
    
      before: {
        width:50,
        height:50,
      },
      imageStyle: {
        width:null,
        height:300,
        borderRadius: 2,
      },
    
      faceStyle: {
          
        flexDirection: "row",
        justifyContent: "flex-start",
      },
    
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize:20,
        color:'#000',
        marginLeft:20,
      }
});

export default AlbumList;