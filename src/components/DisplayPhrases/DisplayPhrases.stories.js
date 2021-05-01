import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import DisplayPhrases from './DisplayPhrases';

storiesOf('Display phrases', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Display phrases', () => <DisplayPhrases />);
