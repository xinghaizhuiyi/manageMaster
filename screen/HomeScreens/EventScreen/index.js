import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Test from './components/MyListItem';
import BottomButton from './components/BottomButton';

function EventScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Test />
      <BottomButton />
    </SafeAreaView>
  );
}

export default EventScreen;
