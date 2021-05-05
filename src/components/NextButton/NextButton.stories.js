import React from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: '#06B6D4',
  },
  whiteButton: {
    backgroundColor: '#ffffff',
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 20,
  },
  blueText: {
    color: '#06B6D4',
  },
  whiteText: {
    color: '#ffffff',
  },
});

storiesOf('Next  Button', module)
  .addDecorator(story => <View style={{paddingVertical: 20}}>{story()}</View>)
  .add('Next Button', () => {
    return (
      <View>
        <NextButton
          title="Add"
          style={styles.blueButton}
          textColor={styles.blueText}
          onPress={() => alert('Button is clicked')}
        />
        <NextButton
          title="Add"
          style={styles.whiteButton}
          textColor={styles.whiteText}
          onPress={() => alert('Button is clicked')}
        />
      </View>
    );
  });
