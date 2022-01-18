import React from 'react';
import {SpeedDial} from 'react-native-elements';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      color={'#0087ff'}>
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        color={'#0087ff'}
        title="新增"
        onPress={() => console.log('Add Something')}
      />
      <SpeedDial.Action
        icon={{name: 'delete', color: '#fff'}}
        color={'#ff4d4f'}
        title="删除"
        onPress={() => console.log('Delete Something')}
      />
    </SpeedDial>
  );
};
