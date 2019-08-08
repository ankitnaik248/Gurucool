import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Picker, CheckBox, ScrollView } from 'react-native';
import { SocialIcon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var { height, width } = Dimensions.get('window');

export default class Register extends Component {
  constructor(){
    super();

    this.state = {
      Age: '',
      Gender: ''
    }
  }

  render () {
      return (
       <ScrollView style = {{ flex: 1}} >
        <View style={styles.container}> 
          
          <Image source = { require("../Images/Registration_Background.jpg") } style = {styles.backgroundImage}></Image>
          <Text style = { styles.headerPara }>Welcome</Text>

          <View style = {styles.regForm}>
            
              <Text style = { styles.personalDetails }>Enter Your Personal Details</Text>

              <TextInput style = { styles.textinput } placeholder = "Enter Mobile Number" placeholderTextColor="#777E8B" />

              <TextInput style = { styles.textinput } placeholder = "Enter Your Email Id" placeholderTextColor="#777E8B" />

              <View style = {{ flex: 1, flexDirection: "row" }}>
                
                <Picker
                  style = {[ styles.textselect, { width: "40%", backgroundColor: '#FFF', color: '#777E8B', marginLeft: 17}]}
                  
                  selectedValue={this.state.Age}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Age: itemValue})
                  }
                  >
                  <Picker.Item label="Age" value="0" />
                  <Picker.Item label="<=5" value="5" />
                  <Picker.Item label="<=10" value="10" />
                  <Picker.Item label="<=15" value="15" />
                  <Picker.Item label="<=20" value="20" />
                </Picker>

                <Picker
                  style = {[ styles.textselect, { width: "40%", backgroundColor: '#FFF', color: '#777E8B',marginLeft: 5}]}
                  selectedValue={this.state.Gender}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Gender: itemValue})
                  }>
                  <Picker.Item label="Gender" value="0" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  
                </Picker>
              </View>

              <TextInput secureTextEntry={true} style = { styles.textinput } placeholder = "Password" placeholderTextColor="#777E8B" />

              <TextInput secureTextEntry={true}  style = { styles.textinput } placeholder = "Re-enter Password" placeholderTextColor="#777E8B" />

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{marginTop: 5, color: "#FFF"}}> I accept terms of the agreement </Text>
              </View>

              <Text style = { styles.button }>Register</Text>
          </View>

        </View>
        </ScrollView> 
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
    top: "6%",
    fontFamily: "sans-serif",
    fontSize: 25,
    fontWeight: 'bold',
    color: "#FFF",
    alignItems: "center"
  },
  regForm: {
    flex:1,
    width: width - 80,
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    top:"22%",
    justifyContent: "center"
  },
  textinput: {
    margin: 12,
    alignSelf: "stretch",
    height: hp('6.8%'),
    width: "90%",
    marginBottom: 5,
    borderRadius: 3,
    alignItems: "center",
    textAlign: "center",
    color: "#777E8B",
    backgroundColor: "#FFF",
    paddingHorizontal: 10
  },
  textselect:{
    margin: 12,
    alignSelf: "stretch",
    height: hp('6%'),
    marginBottom: 5,
    borderRadius: 3,
    alignItems: "center",
    textAlign: "center",
    color: "#777E8B",
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  personalDetails: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: 'bold',
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  button: {
    backgroundColor: "#FFF", 
    color: "#fa485a", 
    fontWeight: "bold",
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 25
  }
  
});
