import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView,Button, ImageBackground, TouchableHighlight } from 'react-native';
import { SocialIcon} from 'react-native-elements';
import * as firebase from 'firebase';
import {Linking, WebBrowser} from 'expo'
import { TabView, SceneMap } from 'react-native-tab-view';



var { height, width } = Dimensions.get('window');
const captchaUrl = `https://gurucool-7c0fc.firebaseapp.com/captcha.html?appurl=${Linking.makeUrl('GurucoolProject')}`



export default class LoginPage extends Component {


  
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
this.props.navigation.navigate("MainPage");
  };
  onFBLoginClick = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    };

    

  render () {
    // if (this.state.user)
    //         return (
    //             this.props.navigation.navigate("Main")
    //         )

    //     if (!this.state.confirmationResult)
    //         return (
    //             <ScrollView style={{padding: 20, marginTop: 20}}>
    //                 <TextInput
    //                     value={this.state.phone}
    //                     onChangeText={this.onPhoneChange}
    //                     keyboardType="phone-pad"
    //                     placeholder="Your phone"
    //                 />
    //                 <Button
    //                     onPress={this.onPhoneComplete}
    //                     title="Next"
    //                 />
    //             </ScrollView>
    //         )
    //     else
    //         return (
    //             <ScrollView style={{padding: 20, marginTop: 20}}>
    //                 <TextInput
    //                     value={this.state.code}
    //                     onChangeText={this.onCodeChange}
    //                     keyboardType="numeric"
    //                     placeholder="Code from SMS"
    //                 />
    //                 <Button
    //                     onPress={this.onSignIn}
    //                     title="Sign in"
    //                 />
    //             </ScrollView>
    //         )
      return (
        <View style={styles.container}> 
          <ImageBackground source = { require("../Images/Background.jpg") } style = {[styles.backgroundImage,{justifyContent:"center"}]}>
            <TextInput 
              style = {[styles.text, {justifyContent: "center", textAlign: "center", marginLeft: "10%"}]}
              placeholder="Registered Phone Number"
              placeholderTextColor="#FFF" 
            />
            <View style={ styles.textPara }>
              <Text style = {{ color: "#fae848", width: 200, textAlign: "center", fontSize:12 }}>Send an OTP to verify your Mobile Number</Text>
            </View>
            

            <View style = { styles.textPara }>
              <Text style = { styles.button } onPress = { this.onLoginClick} >GET OTP</Text>
            </View>

            <View style = { styles.textPara }>
              <Text style = { {color: "#fae848", width: 200, textAlign: "center", top: 89, fontSize:12} }>or Login With</Text>
            </View>  

          {/* <View style = {[styles.textPara, {flexDirection: "row", top: 415}]}>
            <SocialIcon type='facebook' iconColor = "white" style = {{ paddingHorizontal:4,opacity:1,backgroundColor:"#E44236",height:35}}/>
            <SocialIcon type='instagram' iconColor = "white" style = {{ paddingHorizontal:4,opacity:1,backgroundColor:"#E44236",height:35}} />
            <SocialIcon type='twitter' iconColor = "white" style = {{ paddingHorizontal:4,opacity:1,backgroundColor:"#E44236",height:35}} />
            <SocialIcon type='google'iconColor = "white" style = {{ paddingHorizontal:4,opacity:1,backgroundColor:"#E44236",height:35}} />
          </View> */}

            <View style = {[styles.textPara, {flexDirection: "row", top: 402, }]}>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
              <TouchableHighlight onPress={this.onFBLoginClick}>
                <Image source = { require("../Images/icon_facebook.png") } style = {{ height:36, width:36}}/>
              </TouchableHighlight>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image source = { require("../Images/icon_insta.png") } style = {{ height:36, width:36}}/>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image source = { require("../Images/icon_tweeter.png") } style = {{ height:36, width:36}}/>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image source = { require("../Images/icon_g.png") } style = {{ height:36, width:36}}/>
              </View>
            </View>

              <View style = { styles.textPara }>
                <Text style = { {color: "#fae848", width: 300, textAlign: "center", top: 170, fontSize:13} }>Don't Have an account ? <Text style = {{ color: '#E91E63',
        textDecorationLine: 'underline',color:"#FFF"}}  onPress = { () => { this.props.navigation.navigate("Register") }}>Click Here</Text
                ></Text>
              </View>
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
