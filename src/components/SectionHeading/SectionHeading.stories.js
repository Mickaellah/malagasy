import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section Heading', module)
    .addDecorator(story => <View style={{padding: 29}}>{story()}</View>)
    .add('Heading for category', () => <SectionHeading title={"Select a category:"} />)
    .add('Heading for phrases', () => <SectionHeading title={"Seen phrases:"} />)