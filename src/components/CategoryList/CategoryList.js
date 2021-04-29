import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import List from '../List/List';

import Plus from '../../icons/plus.svg';
import LanguageSwitcher from '../../icons/language-switcher.svg';
import Tick from '../../icons/tick.svg';
import DoubleTicks from '../../icons/double-tick.svg';
import Display from '../../icons/display.svg';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 23,
    paddingVertical: 35,
  },
  buttonWrapper: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  toolButtons: {
    margin: 0,
  },
  plusButton: {
    padding: 13,
  },
  tickButton: {
    paddingHorizontal: 11,
    paddingVertical: 13,
    marginLeft: 10,
  },
  doubleTicksButton: {
    paddingHorizontal: 8,
    paddingVertical: 13,
    marginLeft: 10,
  },
  displayButton: {
    padding: 9,
    marginLeft: 10,
  },
  languageSwither: {
    marginLeft: 10,
  },
  listWrapper: {
    marginTop: 56,
  },
});

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <ToolButton
          icon={<Plus />}
          style={[styles.plusButton, styles.toolButtons]}
          onPress={() => alert('I am clicked!!!')}
        />
        <LanguageSwitcherButton
          icon={<LanguageSwitcher />}
          english={'En'}
          malagasy={'Ma'}
          style={styles.languageSwither}
          onPress={() => alert('The language has swithed!!')}
        />
        <ToolButton
          icon={<Tick />}
          style={[styles.tickButton, styles.toolButtons]}
          onPress={() => alert('I am clicked!!!')}
        />
        <ToolButton
          icon={<DoubleTicks />}
          style={[styles.doubleTicksButton, styles.toolButtons]}
          onPress={() => alert('I am clicked!!!')}
        />
        <ToolButton
          icon={<Display />}
          style={[styles.displayButton, styles.toolButtons]}
          onPress={() => alert('I am clicked!!!')}
        />
      </View>
      <View style={styles.listWrapper}>
        <List />
      </View>
    </View>
  );
}
