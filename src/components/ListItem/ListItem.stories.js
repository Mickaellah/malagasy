import React from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

import Arrow from '../../icons/arrow.svg';

const styles = StyleSheet.create({
  learnButtonColor: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

storiesOf('List item', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List item', () => (
    <ListItem
      icon={<Arrow />}
      buttonText={'Learn'}
      onPress={() => alert('Clicked')}
      textColor={styles.learnButtonColor}
    />
  ));
