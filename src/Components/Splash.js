import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import { SocialIcon} from 'react-native-elements';
import * as firebase from 'firebase';
var { height, width } = Dimensions.get('window');

export default class Splash extends Component {
  onLoginClick = () => {
//   //var phoneNumber = getPhoneNumberFromUserInput();
// var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// firebase.auth().signInWithPhoneNumber("917208801002", appVerifier)
//     .then(function (confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
//     });
this.props.navigation.navigate("MainPage2");
  };
  

  render () {
      return (
        <View style={styles.container}> 
          <ImageBackground source = { require("../Images/Background.jpg") } style = {[styles.backgroundImage,{justifyContent:"center"}]}>
            
          </ImageBackground>
        </View>
    );
 }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: width - 50,
    position: "absolute",
    height: 70,
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    // flex:0.2,
    alignItems: "stretch",
    textAlign: "center",
    top:"40%"
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  textPara: {
    position: 'absolute', 
    top: 130, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#FFF", 
    color: "#fa485a", 
    fontWeight: "bold",
    paddingHorizontal: 17,
    paddingVertical: 5,
    top: 52,
    borderRadius: 25
  }
});
