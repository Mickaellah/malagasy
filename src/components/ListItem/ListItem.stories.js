import React, {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

import Arrow from '../../icons/arrow.svg';

storiesOf('List item', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List item', () => (
    <ListItem
      icon={<Arrow />}
      buttonText={'Learn'}
      onPress={() => alert('Clicked')}
    />
  ));
