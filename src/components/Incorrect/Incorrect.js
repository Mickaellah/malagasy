import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useData} from '../../StateManagement/useData';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';
import ListItem from '../ListItem/ListItem';
import NextButton from '../NextButton/NextButton';

import Chevron from '../../icons/chevron-left.svg';
import Display from '../../icons/display.svg';
import LanguageSwitcher from '../../icons/language-switcher.svg';
import Arrow from '../../icons/arrow.svg';
import Incorrect from '../../icons/wrong.svg';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 23,
    paddingVertical: 35,
    marginBottom: 90,
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
  buttons: {
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
  actionButtonText: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
  incorrectButtonText: {
    color: '#D4068E',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
  nextButtonText: {
    color: '#ffffff',
  },
});

export default function CorrectAnswer({route}) {
  const [randomOptions, setRandomOptions] = useState([]);
  const [randomPhrase, setRandomPhrase] = useState({});

  const {phrases, categories, setIsCorrect} = useData();

  const {otherParam, parameter} = route.params;

  const phrasesIdsFromCategory =
    categories && categories?.map(item => item.phrasesIds);

  const getPhrasesIdsFromCategory =
    phrasesIdsFromCategory &&
    phrasesIdsFromCategory.find(phrId => phrId.includes(otherParam?.id));

  const findCategoryId = getPhrasesIdsFromCategory?.find(
    catId => catId === otherParam?.id,
  );

  const getCategoryName =
    categories &&
    categories.filter(cat =>
      cat.phrasesIds.find(phrId => phrId === findCategoryId),
    );

  const randomPhrases = phrases.map(phr => phr);

  const getPhrases = randomPhrases.filter(item =>
    getPhrasesIdsFromCategory.includes(item.id),
  );

  function getRandomPhrases() {
    const random = getPhrases[Math.floor(Math.random() * getPhrases.length)];
    const randomOpt1 =
      getPhrases[Math.floor(Math.random() * getPhrases.length)];
    const randomOpt2 =
      getPhrases[Math.floor(Math.random() * getPhrases.length)];
    const randomOpt3 =
      getPhrases[Math.floor(Math.random() * getPhrases.length)];
    const randomOptions = [random, randomOpt1, randomOpt2, randomOpt3];

    setRandomOptions(randomOptions);
    setRandomPhrase(random);
  }

  useEffect(() => {
    getRandomPhrases();
  }, [phrases]);

  const sortedPhrases = randomOptions?.sort(function (a, b) {
    if (a.name.en.toLowerCase() < b.name.en.toLowerCase()) return -1;
    if (a.name.en.toLowerCase() > b.name.en.toLowerCase()) return 1;
    return 0;
  });

  const navigation = useNavigation();
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
        <Text style={styles.title}>
          {getCategoryName.map(ph => ph.name.en)}
        </Text>
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
          data={sortedPhrases && sortedPhrases}
          renderItem={({item}) => (
            <ListItem
              name={item?.name?.en}
              buttonText={parameter === false ? 'Wrong' : 'Pick'}
              icon={parameter === false ? <Incorrect /> : <Arrow />}
              textColor={
                parameter === false
                  ? styles.incorrectButtonText
                  : styles.actionButtonText
              }
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
      <View>
        <NextButton
          style={styles.buttons}
          textColor={styles.nextButtonText}
          title={'Next'}
          onPress={() => {
            getRandomPhrases();
            setIsCorrect(false);
          }}
        />
      </View>
    </View>
  );
}
