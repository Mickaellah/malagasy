import React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton';

import Plus from '../../icons/plus.svg';
import Tick from '../../icons/tick.svg';
import DoubleTicks from '../../icons/double-tick.svg';
import Chevron from '../../icons/chevron-left.svg';
import Display from '../../icons/display.svg';

const styles = StyleSheet.create({
  plusButton: {
    padding: 13,
  },
  tickButton: {
    paddingHorizontal: 11,
    paddingVertical: 13,
  },
  doubleTicksButton: {
    paddingHorizontal: 8,
    paddingVertical: 13,
  },
  arrowButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  displayButton: {
    padding: 9,
  },
});

storiesOf('ToolButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Tool button', () => {
    return (
      <View>
        <ToolButton
          icon={<Plus />}
          onPress={() => alert('This button has been clicked')}
          style={styles.plusButton}
        />
        <ToolButton
          icon={<Tick />}
          onPress={() => alert('This button has been clicked')}
          style={styles.tickButton}
        />
        <ToolButton
          icon={<DoubleTicks />}
          onPress={() => alert('This button has been clicked')}
          style={styles.doubleTicksButton}
        />
        <ToolButton
          icon={<Chevron />}
          onPress={() => alert('This button has been clicked')}
          style={styles.arrowButton}
        />
        <ToolButton
          icon={<Display />}
          onPress={() => alert('This button has been clicked')}
          style={styles.displayButton}
        />
      </View>
    );
  });
