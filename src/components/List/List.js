import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import {useList, Separator} from './List.stories';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
});

export default function List() {
  const {list} = useList();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading title={'Select a category: '} />
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            name={item.name.en}
            onPress={() => navigation.navigate('Learning')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
}
