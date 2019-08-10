import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground } from 'react-native';
import { SocialIcon} from 'react-native-elements';

var { height, width } = Dimensions.get('window');

export default class LoginPage extends Component {
  render () {
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
              <Text style = { styles.button } onPress = { () => { this.props.navigation.navigate("MainPage") }} >GET OTP</Text>
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
                <Image source = { require("../Images/icon_facebook.png") } style = {{ height:36, width:36}}/>
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
        textDecorationLine: 'underline',color:"#FFF"}} onPress = { () => { this.props.navigation.navigate("Register") }}>Click Here</Text
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
