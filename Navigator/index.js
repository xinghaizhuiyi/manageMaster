import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreens from '../screen/HomeScreens';
import SettingsScreen from '../screen/SettingsScreens/SettingsScreen';
const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === '主页') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === '设置') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any components that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}>
        <Tab.Screen name="主页" component={HomeScreens} />
        <Tab.Screen name="设置" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
