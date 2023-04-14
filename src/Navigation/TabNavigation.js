import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Setting/SettingsScreen';
import HomeNavigation from '../Navigation/HomeNavigation';
import TypeScripTest from '../TypeScripTest/TypeScripTest';
import HeaderComponent from '../Component/HeaderComponent';
import AccountNavigation from '../Navigation/AccountNavigation';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeNavigation" component={HomeNavigation}/>
            <Tab.Screen name="TypeScripTest" component={TypeScripTest} />
            <Tab.Screen name="Account" component={AccountNavigation}/>
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigation;