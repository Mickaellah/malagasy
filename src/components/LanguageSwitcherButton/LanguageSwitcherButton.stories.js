import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import LanguageSwitcherButton from './LanguageSwitcherButton';

import LanguageSwitcher from '../../icons/language-switcher.svg';

const styles = StyleSheet.create({
  button: {
    margin: 0,
    padding: 0,
  },
});

const Switcher = () => {
  const [englishLanguage, setEnglishLanguage] = useState('En');
  const [malagasyLanguage, setMalagasyLanguage] = useState('Ma');

  const toggleSwitcher = () => {
    if (englishLanguage) {
      setEnglishLanguage(malagasyLanguage);
    }
    if (malagasyLanguage) {
      setMalagasyLanguage(englishLanguage);
    }
    alert('Languahe has switched!!!');
  };

  return (
    <LanguageSwitcherButton
      style={styles.button}
      onPress={toggleSwitcher}
      english={englishLanguage}
      malagasy={malagasyLanguage}
      icon={<LanguageSwitcher />}
    />
  );
};

storiesOf('Language Switcher', module)
  .addDecorator(story => <View style={{padding: 16}}>{story()}</View>)
  .add('Language switcher button', () => <Switcher />);
