import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import HomeDetail from './HomeDetail';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;