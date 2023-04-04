import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import HomeTabNavigation from './src/Home/HomeTabNavigation';
import HomeDetail from './src/Home/HomeDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
        {/* <Stack.Screen name="HomeDetail" component={HomeDetail} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;