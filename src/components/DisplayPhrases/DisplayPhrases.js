import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';

import Chevron from '../../icons/chevron-left.svg';
import Display from '../../icons/display.svg';
import LanguageSwitcher from '../../icons/language-switcher.svg';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 23,
    paddingVertical: 35,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  toolButtons: {
    margin: 0,
  },
  arrowButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  displayButton: {
    padding: 9,
    marginLeft: 10,
  },
  languageSwither: {
    marginLeft: 10,
  },
});

export default function DisplayPhrases() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <ToolButton
          style={[styles.toolButtons, styles.arrowButton]}
          icon={<Chevron />}
          onPress={() => alert('I am clicked!!')}
        />
        <ToolButton
          style={[styles.toolButtons, styles.displayButton]}
          icon={<Display />}
          onPress={() => alert('I am clicked!!')}
        />
        <LanguageSwitcherButton
          style={styles.languageSwither}
          icon={<LanguageSwitcher />}
          english={'En'}
          malagasy={'Ma'}
          onPress={() => alert('The language has swithed!!')}
        />
      </View>
      <View>
        <SectionHeading title={'Category: '} />
      </View>
      <View>
        <SectionHeading title={'The phrase: '} />
        <PhraseTextArea
          value={"roa ambin'ny folo"}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View>
        <SectionHeading title={'Pick a solution: '} />
      </View>
    </View>
  );
}
