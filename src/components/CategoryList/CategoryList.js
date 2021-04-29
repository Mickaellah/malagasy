import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';

import Plus from '../../icons/plus.svg';
import LanguageSwitcher from '../../icons/language-switcher.svg';
import Tick from '../../icons/tick.svg';
import DoubleTicks from '../../icons/double-tick.svg';
import Display from '../../icons/display.svg';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
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
  displayButton: {
    padding: 9,
  },
});

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <ToolButton
          icon={<Plus />}
          style={styles.plusButton}
          onPress={() => alert('I am clicked!!!')}
        />
        <LanguageSwitcherButton
          icon={<LanguageSwitcher />}
          english={'En'}
          malagasy={'Ma'}
          onPress={() => alert('The language has swithed!!')}
        />
        <ToolButton
          icon={<Tick />}
          style={styles.tickButton}
          onPress={() => alert('I am clicked!!!')}
        />
        <ToolButton
          icon={<DoubleTicks />}
          style={styles.doubleTicksButton}
          onPress={() => alert('I am clicked!!!')}
        />
        <ToolButton
          icon={<Display />}
          style={styles.displayButton}
          onPress={() => alert('I am clicked!!!')}
        />
      </View>
    </View>
  );
}
