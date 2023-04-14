import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import HomeDetail from '../Home/HomeDetail';
import Confirm from '../Home/Confirm';
import Result from '../Home/Result';
import HeaderComponent from '../Component/HeaderComponent';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
            <HomeStack.Screen name="Confirm" component={Confirm} />
            <HomeStack.Screen name="Result" component={Result} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;