import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ListItem from '../ListItem/ListItem';
import {useList, Separator} from './List.stories';

export default function List() {
  const {list} = useList();

  return (
    <SafeAreaView>
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
