import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import {useData} from '../../StateManagement/useData';

import Arrow from '../../icons/arrow.svg';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  buttonColor: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

export default function List() {
  const {categories} = useData();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading title={'Select a category: '} />
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <ListItem
            textColor={styles.buttonColor}
            name={item.name.en}
            buttonText={'Learn'}
            icon={<Arrow />}
            onPress={() =>
              navigation.navigate('Learning', {
                item,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
