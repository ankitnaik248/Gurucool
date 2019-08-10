import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert } from 'react-native';

import { SearchBar } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';

var { height, width } = Dimensions.get('window');

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
          <View style={styles.container}>
              <ImageBackground source = { require("../Images/sub_desc_bg.jpg") } style = {[styles.backgroundImage,{justifyContent:"center"}]}>
                <View style = { styles.headerPara }>
                  <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle = {{ alignItems:'center', justifyContent:'center', backgroundColor: ""}}
                  />
                </View>
              </ImageBackground>  
         </View>
      );
    }
}    

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
 },
 headerPara: {
    position: "absolute", 
    top: "5%",
    bottom: 0,
    right: 0,
    left: 0
  }
});  