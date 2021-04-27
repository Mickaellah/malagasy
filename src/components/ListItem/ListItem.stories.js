import React, {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('List item', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List item', () => <ListItem />);
