import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import Header from "./HeaderSection";
import { LinearGradient } from 'expo';
// import { TouchableOpacity } from 'react-native-gesture-handler';

var { height, width } = Dimensions.get('window');

export default class Subscription extends Component {
    render () {
        return (
            <View style={styles.container}></View>
        );
    }    
}