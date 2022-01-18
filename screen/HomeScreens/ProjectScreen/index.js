import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Test from './components/test';
import SpeedDial from './components/SpeedDial';

function ProjectScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Test />
      <SpeedDial />
    </SafeAreaView>
  );
}

export default ProjectScreen;
