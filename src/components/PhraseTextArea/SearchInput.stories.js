import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SearchInput from './SearchInput';

storiesOf('SearchInput', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('search', () => <SearchInput placeholder={'Search for an item'} />)
    .add('Filter', () => <SearchInput placeholder={'Filter list'} />)