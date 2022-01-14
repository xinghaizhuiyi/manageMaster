import * as React from 'react';
import {Text, View, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('首页')}
      />
    </View>
  );
}

export default HomeScreen;
