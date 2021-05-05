import React from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import List from './List';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    paddingVertical: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});

export const Separator = () => <View style={styles.separator} />;

storiesOf('List', module)
  .addDecorator(story => <View style={styles.container}>{story()}</View>)
  .add('List', () => <List />);
