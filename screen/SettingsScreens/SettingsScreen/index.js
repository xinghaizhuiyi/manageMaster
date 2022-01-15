import * as React from 'react';
import {Text, View, Button} from 'react-native';

function SettingsScreen() {
  global.Storage.save({
    key: '123', // 注意:请不要在key中使用_下划线符号!
    data: {
      from: 'A',
      userid: 'B',
      token: 'C',
    },
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!1</Text>
      <Button
        title={'打印'}
        onPress={() => {
          global.Storage.load({key: '123'})
            .then(ret => {
              console.log(ret);
            })
            .catch(err => {
              console.log(err.message);
            });
        }}
      />
      <Button
        title={'删除'}
        onPress={() => {
          global.Storage.remove({
            key: '123',
          });
        }}
      />
    </View>
  );
}

export default SettingsScreen;
