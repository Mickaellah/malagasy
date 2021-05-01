import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import CorrectAnswer from './CorrectAnswer';

storiesOf('Correct answer', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('correct answer', () => <CorrectAnswer />);
