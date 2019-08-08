import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, ImageBackground, Alert } from 'react-native';

import { Header } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';

export default class HeaderSection extends Component {

    render () {
        return (
            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#FF9933', '#F6724B', '#192f6a']} >
                <Header
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#FFF',
                        onPress: () => Alert.alert('ea'),
                    }}
                    centerComponent={{ text: 'GURUCOOL', style: { color: '#FFF', fontSize: 20, fontWeight: "bold", left: 0 } }}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor="transparent"
                />
            </LinearGradient>
        );
    }
}    