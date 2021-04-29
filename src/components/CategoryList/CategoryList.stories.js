import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import CategoryList from './CategoryList';

storiesOf('Category List', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Category List', () => <CategoryList />);
