import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screen/SettingsScreen';
import Account from '../Screen/Account';
import HistoryScreen from '../Screen/HistoryScreen';
import HomeNavigation from './HomeNavigation';
import TypeScripTest from '../Screen/TypeScripTest';

const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeNavigation" component={HomeNavigation} />
            <Tab.Screen name="TypeScripTest" component={TypeScripTest} />
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;