import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LoginPage from "./src/Components/LoginPage";
import Register from "./src/Components/Register";
import Subscription from "./src/Components/Subscription";
import Description from "./src/Components/Description";
import Search from "./src/Components/Search";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNaigator = createStackNavigator({
  LoginPage: {screen: LoginPage},
  Register: {screen: Register},
  Subscription: {screen: Subscription},
  Description: {screen: Description},
  Search: {screen: Search}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);

const App = createAppContainer(MainNaigator);

export default App;
