import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import SettingsScreen from '../Screen/SettingsScreen';
import Account from '../Screen/Account';
import HistoryScreen from '../Screen/HistoryScreen';

const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;