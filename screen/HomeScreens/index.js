import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProjectScreen from './ProjectScreen';
import EventScreen from './EventScreen';
import { CurrencyCss } from "../../style/global";

const Tab = createMaterialTopTabNavigator();

function HomeScreens() {
  return (
    <SafeAreaView style={CurrencyCss.Flexbox}>
      <Tab.Navigator>
        <Tab.Screen name="项目" component={ProjectScreen} />
        <Tab.Screen name="事件" component={EventScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
export default HomeScreens;
