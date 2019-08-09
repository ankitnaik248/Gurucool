import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import Header from "./HeaderSection";
import { LinearGradient } from 'expo';
import * as Font from 'expo-font';
// import { TouchableOpacity } from 'react-native-gesture-handler';

var { height, width } = Dimensions.get('window');

export default class Subscription extends Component {

    render () {
        return (
            <View style={styles.container}>
                <View style = {{ width: width }}>
                    <Header />
                </View>

                <View style={{width: "100%", height:"28%", top: 0, bottom: 0, left: 0, right: 0 }} >
                    <Image style = {{width: "100%", height: "100%"}} source={require('../Images/subscription_page_banner.png')} />
                </View>

                <View style = { [styles.container, { padding: 0 }] }>
                    <Image source = { require("../Images/sub_desc_bg.jpg") } style = {styles.backgroundImage}></Image>
                    <Text style = {[{ marginLeft: "3%"},styles.headerPara]}>Terms And Conditions ___</Text>

                    <Text style = {[{ marginLeft: "3%"},styles.paragraph ]}>
                    Megatron is awakened by a resurrected Unicron with the intention of seeking vengeance on the Autobots and obliterating Cybetron. Its Unicron vs the world as this forces an unlikely alliance between the Autobots, Decepticons, Predaking and Predacons, who join forces in a never before seen epic battle to protect the Earth and Cybetron.
                    </Text>

                    <View style = {{ flex: 1, flexDirection: "row", justifyContent: "space-between", textAlign: "center", backgroundColor: "#00000000"}}>
                        <View style = {{ width: (width / 3) - 7, height: "95%", marginLeft: 3 }}>
                            <LinearGradient colors={['#FFFFFF', '#FCE5BC']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    6 Months
                                </Text>
                                <Text style={{ fontSize: 14, marginBottom: 0, paddingBottom: 0, fontFamily: 'sans-serif',textAlign: 'center', color: '#E44236',backgroundColor: 'transparent'}}>
                                    Rs 499 /-
                                </Text>
                                <Text style = {{ color: "#E44236", textAlign: "center",margin:0}}>________</Text>
                                <Text style={ {color: "#2C3335",fontSize: 10,width: "100%", textAlign: "center"}}>
                                    Terms And Conditions Applies*
                                </Text>
                            </LinearGradient>
                        </View>
                        <View style = {{ width: (width / 3) - 7, height: "95%", marginLeft: 3 }}>
                            <LinearGradient colors={['#FFFFFF', '#FCE5BC']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    8 Months
                                </Text>
                                <Text style={{ fontSize: 14, marginBottom: 0, paddingBottom: 0, fontFamily: 'sans-serif',textAlign: 'center', color: '#E44236',backgroundColor: 'transparent'}}>
                                    Rs 699 /-
                                </Text>
                                <Text style = {{ color: "#E44236", textAlign: "center",margin:0}}>________</Text>
                                <Text style={ {color: "#2C3335",fontSize: 10,width: "100%", textAlign: "center"}}>
                                    Terms And Conditions Applies*
                                </Text>
                            </LinearGradient>
                        </View>
                        <View style = {{ width: (width / 3) - 7, height: "95%", marginLeft: 3 }}>
                            <LinearGradient colors={['#FFFFFF', '#FCE5BC']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    12 Months
                                </Text>
                                <Text style={{ fontSize: 14, marginBottom: 0, paddingBottom: 0, fontFamily: 'sans-serif',textAlign: 'center', color: '#E44236',backgroundColor: 'transparent'}}>
                                    Rs 1099 /-
                                </Text>
                                <Text style = {{ color: "#E44236", textAlign: "center",margin:0}}>________</Text>
                                <Text style={ {color: "#2C3335",fontSize: 10,width: "100%", textAlign: "center"}}>
                                    Terms And Conditions Applies*
                                </Text>
                            </LinearGradient>
                        </View>
                    </View>
                    
                        
                    
                </View>
                <TouchableOpacity style = {{height: "15%", width: "100%", justifyContent: "center" , alignItems: "center", backgroundColor: "#00000000"}}>
                    <Image style = {{width: "50%", height: "50%"}} source={require('../Images/subscribe_now_button.png')} />
                </TouchableOpacity>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
       flex: 1,
       width: width,
       height: height,
    },
    headerPara: {
        position: "absolute", 
        top: 0,
        left:"5%",
        fontFamily: "sans-serif",
        fontSize: 15,
        fontWeight: "300",
        color: "#ed298f",
        alignItems: "center",
        paddingVertical: "3%"
    },
    paragraph: {
        position: "absolute",
        top:"10%",
        left: "5%",
        right: "2%",
        paddingVertical: "3%",
        color: "#ed298f",
        fontSize: 10,
        fontFamily: "sans",
        textAlign: "left"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 5,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 10,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        margin: 5,
        color: '#E44236',
        backgroundColor: 'transparent'
      },
});    