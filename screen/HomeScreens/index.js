import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProjectScreen from './ProjectScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreens() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen name="项目" component={ProjectScreen} />
        <Tab.Screen name="事件" component={ProjectScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
export default HomeScreens;
