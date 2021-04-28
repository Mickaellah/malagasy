import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';
import {useList, Separator} from './List.stories';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
  },
});

export default function List() {
  const {list} = useList();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            name={item.name.en}
            onPress={() => alert(`${item.name.en} is pressed!!!`)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}
