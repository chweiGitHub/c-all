import 'react-native-gesture-handler';

import { Assets } from '@react-navigation/elements';
import { registerRootComponent } from 'expo';
import { Asset } from 'expo-asset';

import App from './src/index';

Asset.loadAsync(Assets);

registerRootComponent(App);
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome'
//     };
//     render() {
//         return <Text>Hello, Navigation!</Text>;
//     }
// }
//
// const SimpleApp = StackNavigator({
//     Home: { screen: HomeScreen }
// });
//
// export default class App extends React.Component {
//     render() {
//         return <SimpleApp />;
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });