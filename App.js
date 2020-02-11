import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LoginPage from "./src/Components/LoginPage";
import Register from "./src/Components/Register";
import Subscription from "./src/Components/Subscription";
import Description from "./src/Components/Description";
import Search from "./src/Components/Search";
import DownloadList from "./src/Components/DownloadList";
import MainPage from "./src/Components/MainPage";
import MainPage2 from "./src/Components/MainPage2";
import Settings from "./src/Components/Settings";
import Splash from "./src/Components/Splash";
import Game1 from "./src/Components/Game1";
import Game2 from "./src/Components/Game2";
//import RNFirebase from 'react-native-firebase';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer, HeaderBackButton } from "react-navigation";

const MainNaigator = createStackNavigator({
  LoginPage: {screen: LoginPage},
  Register: {screen: Register},
  Subscription: {screen: Subscription},
  Description: {screen: Description},
  Search: {screen: Search},
  DownloadList: {screen: DownloadList},
  MainPage: {screen: MainPage},
  MainPage2: {screen: MainPage2},
  Settings: {screen: Settings},
  Splash: {screen: Splash},
  Game1: {screen: Game1},
  Game2: {screen: Game2}
},
{
  headerMode: 'screen',
  navigationOptions: {
    headerVisible: true,
    headerTitle:'GuruKool',
    HeaderBackButton: false
  }
 }
);


var firebaseConfig = {
  apiKey: "AIzaSyAFfok43m4sja8PNq3oOEXPt10YLROFRpI",
  authDomain: "gurucool-7c0fc.firebaseapp.com",
  databaseURL: "https://gurucool-7c0fc.firebaseio.com",
  projectId: "gurucool-7c0fc",
  storageBucket: "",
  messagingSenderId: "858884686830",
  appId: "1:858884686830:web:42684280f74d6938"
};
firebase.initializeApp(firebaseConfig);


const App = createAppContainer(MainNaigator);

export default App;