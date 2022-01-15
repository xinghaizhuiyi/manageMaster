import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem, Icon, ListItemProps, Button} from 'react-native-elements';

const log = () => console.log('this is an example method');

type List1Data = {
  title: string,
  icon: string,
};
const list1: List1Data[] = [
  {
    title: 'Appointments',
    icon: 'av-timer',
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
type ListComponentProps = ListItemProps;

const Lists2: React.FunctionComponent<ListComponentProps> = () => {
  const renderRow = ({item}: {item: List1Data}) => {
    return (
      <ListItem.Swipeable
        onPress={log}
        bottomDivider
        leftContent={
          <Button
            title="简介"
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
          />
        }
        rightContent={
          <Button
            title="删除"
            icon={{name: 'delete', color: 'white'}}
            buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
          />
        }>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };
  return (
    <>
      <FlatList
        // scrollEnabled={false}
        style={styles.container}
        data={list1}
        keyExtractor={(a: List1Data, index: number) => index.toString()}
        renderItem={renderRow}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Lists2;
