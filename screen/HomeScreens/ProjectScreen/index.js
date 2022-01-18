import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Test from './components/test';

function ProjectScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Test />
      {/*<Text style={{flex:1}}>abc</Text>*/}
    </SafeAreaView>
  );
}

export default ProjectScreen;
