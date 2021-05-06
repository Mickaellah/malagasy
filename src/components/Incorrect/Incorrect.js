import React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';
import ListItem from '../ListItem/ListItem';
import NextButton from '../NextButton/NextButton';

import {useData} from '../../StateManagement/useData';

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
  nextButtons: {
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 10,
    paddingLeft: 27,
    paddingRight: 31,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    backgroundColor: '#06B6D4',
    marginTop: 60,
  },
  nextButtonText: {
    color: '#ffffff',
  },
});

export default function Incorrect({route}) {
  const navigation = useNavigation();

  const {otherParam} = route.params;
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
          malagasy={'Ma'}
          onPress={() => alert('The language has swithed!!')}
        />
      </View>
      <View style={styles.categoryHeading}>
        <SectionHeading title={'Category: '} />
        {/* <Text style={styles.title}>
          {getCategoryName.map(ph => ph.name.en)}
        </Text> */}
      </View>
      <View style={styles.phrasesHeading}>
        <SectionHeading title={'The phrase: '} />
        <PhraseTextArea
          value={otherParam?.name?.mg}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <SafeAreaView style={styles.solutionHeading}>
        <SectionHeading title={'Pick a solution: '} />
        <FlatList
          //   data={sortedPhrases && sortedPhrases}
          renderItem={({item}) => (
            <ListItem
              name={item?.name?.en}
              buttonText={buttonText}
              icon={<Arrow />}
              textColor={styles.actionButtonText}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
      <View>
        <NextButton
          style={styles.nextButtons}
          textColor={styles.nextButtonText}
          title={'Next'}
          //   onPress={() => {
          //     getRandomPhrases();
          //     setIsCorrect(false);
          //   }}
        />
      </View>
    </View>
  );
}
