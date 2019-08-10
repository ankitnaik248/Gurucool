import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert } from 'react-native';

import { ListItem, Avatar, Icon } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from 'expo';

var { height, width } = Dimensions.get('window');

export default class DownloadList extends Component {

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
                    leftAvatar={{ rounded: true, source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                    title="Chris Jackson"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="Vice Chairman"
                    chevronColor="white"
                    chevron
                    rightIcon={<Icon name={'play'} size={20}/>}
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
                    leftAvatar={{ rounded: true, source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                    title="Chris Jackson"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="Vice Chairman"
                    chevronColor="white"
                    chevron
                    rightIcon={<Icon name={'play'} size={20}/>}
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