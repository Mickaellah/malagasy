import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

storiesOf('Next  Button', module)
    .addDecorator(story => <View style={{paddingVertical: 20}}>{story()}</View>)
    .add('Next Button', () => <NextButton 
        title="Add" 
        onPress={() => alert('Button is clicked')}
    />)
