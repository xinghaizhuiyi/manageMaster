import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {MyListItemCss} from '../../../../style/HomeScreens/EventScreen';

const list1 = [
  {
    title: '测试项目',
    introduction: '测试数据用',
    icon: 'folder-outline',
    iconType: 'ionicon',
    color: '#0087ff',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];
const ItemIcon = () => {
  return (
    <Icon
      name="list-outline"
      type="ionicon"
      // color={item.color}
    />
  );
};

const MyListItem = (item, index) => {
  return (
    <ListItem style={MyListItemCss.ListItem} key={index} onPress={() => {}}>
      {ItemIcon()}
      <ListItem.Content>
        <ListItem.Title style={{}}>{item.title}</ListItem.Title>
        <ListItem.Subtitle right>预定时间：2022-1-21 10:30</ListItem.Subtitle>
        <ListItem.Subtitle right>预定时间：2022-1-21 10:30</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right style={{color: 'green', fontSize: 14}}>
          状态:良好
          {/*{item.introduction}*/}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const Lists2 = () => {
  return (
    <>
      <View>{list1.map(MyListItem)}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Lists2;
