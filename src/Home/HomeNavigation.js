import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeDetail from './HomeDetail';
import Confirm from './Confirm';
import Result from './Result';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
            <HomeStack.Screen name="Confirm" component={Confirm} />
            <HomeStack.Screen name="Result" component={Result} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;