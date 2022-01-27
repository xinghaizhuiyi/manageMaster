import * as React from 'react';
import Navigator from './Navigator';
import {View} from 'react-native';
import storage from './storage/storage';
import {userInitialize} from './storage/storageFunction';
global.Storage = storage;

export default function App() {
  userInitialize();
  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
}
