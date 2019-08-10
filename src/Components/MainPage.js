import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import { SocialIcon} from 'react-native-elements';

import { Header } from 'react-native-elements';
import { Button } from 'react-native-paper';
var { height, width } = Dimensions.get('window');

export default class MainPage extends Component {
  DownloadList = () => {
    this.props.navigation.navigate("DownloadList");
  };
  render () {
      return (
        <View style={styles.container} >
          <View style = {{ width: width }}>
          <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'GURUCOOL', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
  containerStyle={{
    backgroundColor: '#f9912e',
    justifyContent: 'space-around',
  }}
/>
                </View>
          <ImageBackground source = { require("../Images/MainPageBg.jpg") } style = {[styles.backgroundImage,{justifyContent:"center"}]}>
          <ScrollView style={{flex:0.8}} scrollEventThrottle={16}>
            
            <View style={{flex:1,margin:20}}>
            <View style={{width: width, height: 100, flexDirection: "row", paddingBottom:20, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <ImageBackground source = { require("../Images/menubutton.png") } style = {{justifyContent:"center", width: 130, height:50, alignItems: 'center'}}><Text style={{color:'#fff',fontSize:20, fontWeight:'bold'}}>Video</Text></ImageBackground> 
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1,  width: 130, height:50, alignItems: 'center',
    justifyContent: 'center'}}>
                <Text style={{color:'#ee2c8d',fontSize:20, fontWeight:'bold'}} >Audio</Text>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1,  width: 130, height:50, alignItems: 'center',
    justifyContent: 'center'}}>
                <Text style={{color:'#ee2c8d',fontSize:20, fontWeight:'bold'}} >Games</Text> 
              </View>
              </View>
            <Text style={{color:'#e32c94',fontSize:24, fontWeight:'bold'}}>Top ____</Text>
              <View style={{height:130,marginTop:20}}>
              <ScrollView horizontal='true' style={{height : 130}} showsHorizontalScrollIndicator={false}> 
            <TouchableHighlight  onPress = { () => { this.props.navigation.navigate("Description") }}>
            <View style={{height : 130, width: 130, marginLeft:20 }}>
              <View style={{flex:2}}>
                
                <Image  source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, borderRadius:5,  height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            </TouchableHighlight>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon2.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20,}}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon3.jpg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
          </ScrollView>
              </View>

            </View>


            <View style={{flex:1,marginHorizontal:20}}>
            <Text style={{color:'#e32c94',fontSize:24, fontWeight:'bold'}}>Action and Advanture ____</Text>
              <View style={{height:130,marginTop:20}}>
              <ScrollView horizontal='true' style={{height : 130}} showsHorizontalScrollIndicator={false}> 
            <View style={{height : 130, width: 130, marginLeft:20 }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, borderRadius:5,  height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon2.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20,}}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon3.jpg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
          </ScrollView>
              </View>

            </View>



            <View style={{flex:1,marginHorizontal:20}}>
            <Text style={{color:'#e32c94',fontSize:24, fontWeight:'bold'}}>Nursery Rhymes ____</Text>
              <View style={{height:130,marginTop:20}}>
              <ScrollView horizontal='true' style={{height : 130}} showsHorizontalScrollIndicator={false}> 
            <View style={{height : 130, width: 130, marginLeft:20 }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, borderRadius:5,  height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon2.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20,}}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon3.jpg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
          </ScrollView>
              </View>

            </View>

            
            <View style={{flex:1,marginHorizontal:20}}>
            <Text style={{color:'#e32c94',fontSize:24, fontWeight:'bold'}}>Editors Pick ____</Text>
              <View style={{height:130,marginTop:20}}>
              <ScrollView horizontal='true' style={{height : 130}} showsHorizontalScrollIndicator={false}> 
            <View style={{height : 130, width: 130, marginLeft:20 }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, borderRadius:5,  height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon2.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20,}}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon3.jpg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
          </ScrollView>
              </View>

            </View>

            
            <View style={{flex:1,marginHorizontal:20}}>
            <Text style={{color:'#e32c94',fontSize:24, fontWeight:'bold'}}>Educational ____</Text>
              <View style={{height:130,marginTop:20}}>
              <ScrollView horizontal='true' style={{height : 130}} showsHorizontalScrollIndicator={false}> 
            <View style={{height : 130, width: 130, marginLeft:20 }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, borderRadius:5,  height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon2.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20,}}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon3.jpg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
            <View style={{height : 130, width: 130, marginLeft:20, }}>
              <View style={{flex:2}}>
                <Image source = {require("../Images/cartoon.jpeg")} style={{flex:1,width:null, height:null, resizeMode:"cover", shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2}}></Image>
              </View>
              <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                <Text style={{color:'#7d7d7d'}}>Movie Name</Text>
              </View>
            </View>
          </ScrollView>
              </View>

            </View>
          </ScrollView>
          <View style={{flex: 0.1}}>
          <ImageBackground source={require('../Images/BackgroundOld3.jpeg')} style={{width: '100%', height: '100%'}}>
          <View style={{width: width, height: 100, flexDirection: "row", paddingBottom:20, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image source = { require("../Images/home_icon.png") } style = {{ height:50, width:50}}/>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}} >
              <TouchableHighlight onPress = { () => { this.props.navigation.navigate("Search") }}>
                <Image   source = { require("../Images/search_icon.png") } style = {{ height:50, width:50}}/>
                </TouchableHighlight>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image  source = { require("../Images/bookmark_icon.png") } style = {{ height:50, width:50}}/>
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
              <TouchableHighlight onPress={this.DownloadList}>
              <Image onPress = {this.DownloadList} source = { require("../Images/download_icon2.png") } style = {{ height:50, width:50}}/>
              </TouchableHighlight>
                
              </View>
              <View style = {{ paddingHorizontal:5,opacity:1}}>
                <Image  source = { require("../Images/setting_icon.png") } style = {{ height:50, width:50}}/>
              </View>
          </View>
          </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  }
});
