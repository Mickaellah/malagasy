import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import ActionButton from '../ActionButton/ActionButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';

import {usePhrasesList, Separator} from './phrases';

import Chevron from '../../icons/chevron-left.svg';
import Display from '../../icons/display.svg';
import LanguageSwitcher from '../../icons/language-switcher.svg';
import Arrow from '../../icons/arrow.svg';

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
  categoryHeading: {
    marginTop: 66,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
  },
  phrasesHeading: {
    marginTop: 30,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  solutionHeading: {
    marginTop: 37,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  optionsWrapper: {
    backgroundColor: '#ffffff',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  option: {
    margin: 0,
    paddingHorizontal: 16,
    paddingVertical: 17,
    borderStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    textAlignVertical: 'center',
  },
  actionButtonText: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

export default function DisplayPhrases({route}) {
  const {
    phrases,
    getRandomPhrases,
    randomPhrases,
    randomOption,
    categories,
  } = usePhrasesList();

  const navigation = useNavigation();

  const sortedPhrases = randomOption.sort(function (a, b) {
    if (a.name.en.toLowerCase() < b.name.en.toLowerCase()) return -1;
    if (a.name.en.toLowerCase() > b.name.en.toLowerCase()) return 1;
    return 0;
  });

  return (
    <View style={styles.container}>
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
      <View style={styles.categoryHeading}>
        <SectionHeading title={'Category: '} />
        <Text style={styles.title}>{route.params.item.name.en}</Text>
      </View>
      <View style={styles.phrasesHeading}>
        <SectionHeading title={'The phrase: '} />
        <PhraseTextArea
          value={"roa ambin'ny folo"}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View style={styles.solutionHeading}>
        <SectionHeading title={'Pick a solution: '} />
        <View style={styles.optionsWrapper}>
          {sortedPhrases &&
            sortedPhrases.map((phr, index) => {
              return (
                <View key={index} style={styles.option}>
                  <Text style={styles.buttonText}>{phr?.name.en}</Text>
                  <ActionButton
                    buttonText={'Pick'}
                    icon={<Arrow />}
                    onPress={() => alert('Pick a solution.')}
                    textColor={styles.actionButtonText}
                  />
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
}
