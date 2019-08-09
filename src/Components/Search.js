import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert } from 'react-native';

import { SearchBar } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';


export default class Search extends Component {

    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
        const { search } = this.state;
    
        return (
            <View styles={{ flex:1, position: "absolute", top: 6 }}>
            <SearchBar
               placeholder="Type Here..."
               onChangeText={this.updateSearch}
               value={search}
               containerStyle = {{ alignItems:'center', justifyContent:'center', marginTop: "10%" }}
            />
         </View>
        );
      }
}    