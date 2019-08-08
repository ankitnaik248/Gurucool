import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import LoginPage from "./src/Components/LoginPage";
import Register from "./src/Components/Register";
import Subscription from "./src/Components/Subscription";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNaigator = createStackNavigator({
  LoginPage: {screen: LoginPage},
  Register: {screen: Register},
  Subscription: {screen: Subscription}
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
