import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import LanguageSwitcherButton from './LanguageSwitcherButton';

storiesOf('Language Switcher', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Language switcher button', () => <LanguageSwitcherButton />);
