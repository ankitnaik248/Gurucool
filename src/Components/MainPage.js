import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, WebView, Dimensions, ImageBackground, ToastAndroid, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Header } from 'react-native-elements';
import { Button } from 'react-native-paper';
var { height, width } = Dimensions.get('window');

export default class MainPage extends Component {
  onRefresh() {
    this.setState({ isFetching: true }, function() { //this.getApiData() 
    });
 }
 getApiData() {
  const url = "http://192.168.0.100/GuruKool/public/api/video"
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.video
        })
        console.log(this.state.dataSource)
      })
      .catch(error => {
        console.error(error);
      });
}

   FirstRoute = () => (
    <ImageBackground source={require("../Images/MainPageBg.jpg")} style={[styles.backgroundImage, { justifyContent: "center" }]}>
      <ScrollView style={{ flex: 0.8 }} scrollEventThrottle={16}>

        <View style={{ flex: 1, margin: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Top ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Description") }}>
                <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                  <View style={{ flex: 2 }}>

                    <Image source={require("../Images/cartoon.jpeg")} style={{
                      flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                    }}></Image>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ color: '#7d7d7d' }}>Sample Demo Video</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Action and Advanture ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>



        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Nursery Rhymes ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Editors Pick ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Educational ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <ImageBackground source={require('../Images/BackgroundOld3.jpeg')} style={{ width: '100%', height: '100%' }}>
          <View style={{ width: width, height: 100, flexDirection: "row", paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/home_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }} >
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Search") }}>
                <Image source={require("../Images/search_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/bookmark_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={this.DownloadList}>
                <Image onPress={this.DownloadList} source={require("../Images/download_icon2.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>

            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Settings") }}>
                <Image source={require("../Images/setting_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );


  SecondRoute = () => (
    <ImageBackground source={require("../Images/MainPageBg.jpg")} style={[styles.backgroundImage, { justifyContent: "center" }]}>
      <ScrollView style={{ flex: 0.8 }} scrollEventThrottle={16}>

        <View style={{ flex: 1, margin: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Top ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Description") }}>
                <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                  <View style={{ flex: 2 }}>

                    <Image source={require("../Images/cartoon.jpeg")} style={{
                      flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                    }}></Image>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Action and Advanture ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>



        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Nursery Rhymes ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Editors Pick ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Educational ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <ImageBackground source={require('../Images/BackgroundOld3.jpeg')} style={{ width: '100%', height: '100%' }}>
          <View style={{ width: width, height: 100, flexDirection: "row", paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/home_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }} >
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Search") }}>
                <Image source={require("../Images/search_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/bookmark_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={this.DownloadList}>
                <Image onPress={this.DownloadList} source={require("../Images/download_icon2.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>

            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Settings") }}>
                <Image source={require("../Images/setting_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );

  ThirdRoute = () => (
    <ImageBackground source={require("../Images/MainPageBg.jpg")} style={[styles.backgroundImage, { justifyContent: "center" }]}>
      <ScrollView style={{ flex: 0.8 }} scrollEventThrottle={16}>

        <View style={{ flex: 1, margin: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Top ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <TouchableHighlight onPress={this.Game1}>
                <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                  <View style={{ flex: 2 }}>

                    <Image source={require("../Images/game1.jpg")} style={{
                      flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                    }}></Image>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.Game2}>
                <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                  <View style={{ flex: 2 }}>
                    <Image source={require("../Images/game2.jpg")} style={{
                      flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                    }}></Image>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Action and Advanture ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>



        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Nursery Rhymes ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Editors Pick ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>


        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: '#e32c94', fontSize: 24, fontWeight: 'bold' }}>Educational ____</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal='true' style={{ height: 130 }} showsHorizontalScrollIndicator={false}>
              <View style={{ height: 130, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon2.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon3.jpg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
              <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 2 }}>
                  <Image source={require("../Images/cartoon.jpeg")} style={{
                    flex: 1, width: null, height: null, resizeMode: "cover", shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
                  }}></Image>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ color: '#7d7d7d' }}>Movie Name</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <ImageBackground source={require('../Images/BackgroundOld3.jpeg')} style={{ width: '100%', height: '100%' }}>
          <View style={{ width: width, height: 100, flexDirection: "row", paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/home_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }} >
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Search") }}>
                <Image source={require("../Images/search_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <Image source={require("../Images/bookmark_icon.png")} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={this.DownloadList}>
                <Image onPress={this.DownloadList} source={require("../Images/download_icon2.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>

            </View>
            <View style={{ paddingHorizontal: 5, opacity: 1 }}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate("Settings") }}>
                <Image source={require("../Images/setting_icon.png")} style={{ height: 50, width: 50 }} />
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );

  Game1 = () => {
    this.props.navigation.navigate("Game1");
  }
  Game2 = () => {
    this.props.navigation.navigate("Game2");
  }
  constructor() {
    super()
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Video' },
        { key: 'second', title: 'Audio' },
        { key: 'third', title: 'Games' },
      ],
      isFetching: false,
      dataSource:[],
      
    };

  }
  // state = {
  //   dataSource:[],
  //   index: 0,
  //   routes: [
  //     { key: 'first', title: 'Video' },
  //     { key: 'second', title: 'Audio' },
  //     { key: 'third', title: 'Games' },
  //   ],
  // };
  renderItem  ({ item, index }) {
    url = "" + item.thumb
    console.log(this.state.dataSource)
    return (
      //<Text style={{ color: '#7d7d7d' }}>{item.name}</Text>
      <View key={item.id} style={{ height: 130, width: 130, borderWidth: 5, marginLeft: 20 }}>
        <View style={{ flex: 2, borderWidth: 5, }}>

          <Image source={{ uri: item.thumb }} style={{
            flex: 1, width: null, borderRadius: 5, height: null, resizeMode: "cover", shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2
          }}></Image>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}></View>
        <Text style={{ color: '#7d7d7d' }}>{item.name}</Text>
        <Text style={{ color: '#7d7d7d' }}>{item.description}</Text>
      </View>
    )

  }


  componentDidMount() {
    // const url = "http://192.168.0.100/GuruKool/public/api/video"
    // fetch(url)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({
    //       dataSource: responseJson.video
    //     })
    //     console.log(this.state.dataSource)
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: this.FirstRoute,
          second: this.SecondRoute,
          third: this.ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
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