import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import TextArea from './TextArea'; 
 

storiesOf('TextArea', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('TextArea', () => <TextArea value="roa ambin' ny folo" multiline={true} number={3} />)
    .add('TextInput', () => <TextArea placeholder='Enter here' multiline={true} number={3} />

    )