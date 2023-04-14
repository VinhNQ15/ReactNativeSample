import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../Account/AccountScreen'
import HeaderComponent from '../Component/HeaderComponent';

const AccountStack = createStackNavigator();

const AccountNavigation = () => {
    return (
        <AccountStack.Navigator screenOptions={{
            header: () => <HeaderComponent />,
            headerShown: false
        }}>
            <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
            {/* <AccountStack.Screen name="HomeDetail" component={HomeDetail} />
            <AccountStack.Screen name="Confirm" component={Confirm} />
            <AccountStack.Screen name="Result" component={Result} /> */}
        </AccountStack.Navigator>
    );
};

export default AccountNavigation;