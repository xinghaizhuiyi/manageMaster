import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {
  MyListItemCss,
} from '../../../../style/HomeScreens/ProjectScreen';

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

const MyListItem = (item, index) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <ListItem.Accordion
      style={MyListItemCss.ListItem}
      content={
        <>
          <Icon
            name={item.icon}
            type={item.iconType}
            color={item.color}
            style={MyListItemCss.icon}
          />
          <ListItem.Content>
            <ListItem.Title style={{color: 'red'}}>{item.title}</ListItem.Title>
            <ListItem.Subtitle>
              {item.introduction ?? '暂无简介，请添加'}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right style={{color: 'green', fontSize: 14}}>
              进度:良好
              {/*{item.introduction}*/}
            </ListItem.Title>
            <ListItem.Subtitle right>完成度：0%</ListItem.Subtitle>
          </ListItem.Content>
        </>
      }
      key={index}
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <View style={MyListItemCss.ListItemInner}>
        <Text>123</Text>
      </View>
    </ListItem.Accordion>
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
