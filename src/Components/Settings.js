import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert } from 'react-native';

import { ListItem, Avatar, Icon } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from 'expo';

var { height, width } = Dimensions.get('window');

export default class Settings extends Component {

    render () {
        return (
            <View style={styles.container}>
              <ImageBackground source = { require("../Images/sub_desc_bg.jpg") } style = {[styles.backgroundImage,{justifyContent:"center"}]}>  
               <View style = {styles.headerPara}> 
                <ListItem
                    Component={TouchableScale}
                    friction={90} 
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    linearGradientProps={{
                        colors: ['#FF9800', '#F44336'],
                        start: [1, 0],
                        end: [0.2, 0],
                    }}
                    ViewComponent={LinearGradient} // Only if no expo
                    leftAvatar={{ rounded: true, source: { uri: 'data:image/png;base64,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' } }}
                    title="Download Location"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="/Emulated/Storage"
                    chevronColor="white"
                    chevron
                    // rightIcon={<Icon name={'play'} size={20}/>}
                    containerStyle = {{ marginBottom: 10}}
                />

                <ListItem
                    Component={TouchableScale}
                    friction={90} 
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    linearGradientProps={{
                        colors: ['#FF9800', '#F44336'],
                        start: [1, 0],
                        end: [0.2, 0],
                    }}
                    ViewComponent={LinearGradient} // Only if no expo
                    leftAvatar={{ rounded: true, source: { uri: 'data:image/png;base64,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' } }}
                    title="Video Quality"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="480p"
                    chevronColor="white"
                    chevron
                    // rightIcon={<Icon name={'play'} size={20}/>}
                    containerStyle = {{ marginBottom: 10}}
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