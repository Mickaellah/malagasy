import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import ActionButton from '../ActionButton/ActionButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';

const styles = StyleSheet.create({
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

export default function CorrectAnswer() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonWrapper}>
        <ToolButton
          style={[styles.toolButtons, styles.arrowButton]}
          icon={<Chevron />}
          onPress={() => navigation.goBack()}
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
          phrases
          malagasy={'Ma'}
          onPress={() => alert('The language has swithed!!')}
        />
      </View>
    </View>
  );
}
