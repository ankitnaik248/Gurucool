import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground } from 'react-native';
import { SocialIcon} from 'react-native-elements';

var { height, width } = Dimensions.get('window');

export default class LoginPage extends Component {
  render () {
      return (
        <View style = { styles.textPara }>
        <Text style = { {color: "#fae848", width: 200, textAlign: "center", top: 89, fontSize:12} }>or Login With</Text>
      </View> 
      );
  }
}  
