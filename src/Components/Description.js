import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Header from "./HeaderSection";
import { LinearGradient } from 'expo';
import { Video } from 'expo-av';

//import { TouchableOpacity } from 'react-native-gesture-handler';

var { height, width } = Dimensions.get('window');
const url = 'http://192.168.0.110/abc.mp4';
export default class Description extends React.Component  {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: width, height: "30%", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "black" }} >
                    <Video
                      source={{ uri: 'http://192.168.0.110/abc.mp4' }}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="cover"
                      shouldPlay
                      useNativeControls
                      isLooping
                      style={{ width: width, height: "100%"}}
                    />
                </View>
                <View style={{ backgroundColor: "pink", height: "70%", width: width }}>
                    <ImageBackground source={require("../Images/sub_desc_bg.jpg")} style={{ justifyContent: "center", width: width, height: "100%" }}>
                        <Text style={styles.headerPara}>Sample Demo Video</Text>
                        <View style={[styles.headerPara, { flexDirection: "row", top: 30, paddingLeft: "3%" }]} >
                            <Text style={{ fontSize: 12, alignContent: "center", top: 6 }}> Kids | English | 2013 | 01hr 1mins</Text>
                            <Image source={require("../Images/watchlist_icon.png")} style={{ height: 36, width: 36, marginLeft: 8 }} />
                            <Image source={require("../Images/share_icon.png")} style={{ height: 36, width: 36, paddingLeft: 2 }} />
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("DownloadList") }}><Image source={require("../Images/download_icon.png")} style={{ height: 36, width: 36, paddingLeft: 2 }} /></TouchableOpacity>
                        </View>
                        <View style={[styles.headerPara, { flexDirection: "row", top: 70, paddingLeft: "3%" }]}>
                            <Text>
                                Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as pain itself.
                            </Text> 
                        </View>

                        <View style={[styles.headerPara, { flexDirection: "row", top: 20, paddingLeft: "3%", alignItems: "center", width: width }]}>
                            {/* <Image source = { require("../Images/play_now_button.png") } style = {{ height:36, width: 120 }}/>   
                            <Image source = { require("../Images/trailer_button.png") } style = {{ height:36, width: 120, marginLeft: 5 }}/> */}
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Subscription") }} style={{ height: "2%", justifyContent: "center", alignItems: "center", backgroundColor: "#00000000" }}>
                                <Image source={require("../Images/play_now_button.png")} style={{ height: 36, width: 120 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: "2%", justifyContent: "center", alignItems: "center", backgroundColor: "#00000000" }}>
                                <Image source={require("../Images/trailer_button.png")} style={{ height: 36, width: 120, marginLeft: 15 }} />
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerPara: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: "3%",
        fontFamily: "sans-serif",
        fontSize: 15,
        fontWeight: "300",
        color: "#ed298f",
        paddingVertical: 10,
        paddingBottom: 10,
        borderColor: 1
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
    }
});

AppRegistry.registerComponent('Description', () => Description)
