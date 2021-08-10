import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  HomeScreen from '/page/HomeScreen'

// const HomeScreen = () => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//     </View>
// );

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

export default RootNavigator;