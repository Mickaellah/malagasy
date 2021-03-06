import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';
import ListItem from '../ListItem/ListItem';

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
});

export default function DisplayPhrases({route}) {
  const {
    phrases,
    isClicked,
    setIsClicked,
    setIsCorrect,
    randomOptions,
    setRandomOptions,
    randomPhrase,
    setRandomPhrase,
  } = useData();

  const findPhrasesById = phrases.find(
    phr => phr.id === route?.params?.item?.phrasesIds?.find(phrId => phrId),
  );

  const categoryPhrasesIds = route?.params?.item?.phrasesIds;

  const phrasesFromCategoryPhrasesIds = phrases.filter(item =>
    categoryPhrasesIds.includes(item.id),
  );

  const phrase =
    phrasesFromCategoryPhrasesIds[
      Math.floor(Math.random() * phrasesFromCategoryPhrasesIds.length)
    ];

  const getRandomPhrasesFromCategoryPhrasesIds = phrases.filter(item =>
    categoryPhrasesIds?.includes(item.id),
  );

  const correctAnswer = getRandomPhrasesFromCategoryPhrasesIds.filter(
    phr => phr.id === route?.params?.item?.phrasesIds?.find(id => id),
  );

  const selectedAnswer = randomOptions.map(item => item?.id);

  const findValidAnswer = selectedAnswer.map(
    id =>
      JSON.stringify(id) == correctAnswer.map(item => JSON.stringify(item.id)),
  );

  const validAnswer = findValidAnswer.find(item => item === true);

  function checkAnswer() {
    if (validAnswer === true && !isClicked) {
      setIsClicked(true);
      setIsCorrect(true);
    } else if (validAnswer === false && !isClicked) {
      setIsClicked(true);
      setIsCorrect(false);
    } else {
      setIsClicked(false);
      setIsCorrect(false);
    }
  }

  function getRandomPhrases() {
    const random =
      getRandomPhrasesFromCategoryPhrasesIds[
        Math.floor(
          Math.random() * getRandomPhrasesFromCategoryPhrasesIds.length,
        )
      ];
    const randomOpt1 =
      getRandomPhrasesFromCategoryPhrasesIds[
        Math.floor(
          Math.random() * getRandomPhrasesFromCategoryPhrasesIds.length,
        )
      ];
    const randomOpt2 =
      getRandomPhrasesFromCategoryPhrasesIds[
        Math.floor(
          Math.random() * getRandomPhrasesFromCategoryPhrasesIds.length,
        )
      ];
    const randomOpt3 =
      getRandomPhrasesFromCategoryPhrasesIds[
        Math.floor(
          Math.random() * getRandomPhrasesFromCategoryPhrasesIds.length,
        )
      ];
    const randomOptions = [random, randomOpt1, randomOpt2, randomOpt3];

    setRandomOptions(randomOptions);
    setRandomPhrase(random);
  }

  useEffect(() => {
    getRandomPhrases();
  }, [phrases]);

  const navigation = useNavigation();

  const sortedPhrasesByName = randomOptions?.sort(function (a, b) {
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
          malagasy={'Ma'}
          onPress={() => alert('The language has swithed!!')}
        />
      </View>
      <View style={styles.categoryHeading}>
        <SectionHeading title={'Category: '} />
        <Text style={styles.title}>{route?.params?.item?.name?.en}</Text>
      </View>
      <View style={styles.phrasesHeading}>
        <SectionHeading title={'The phrase: '} />
        <PhraseTextArea
          value={phrase?.name?.mg}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <SafeAreaView style={styles.solutionHeading}>
        <SectionHeading title={'Pick a solution: '} />
        <FlatList
          data={sortedPhrasesByName && sortedPhrasesByName}
          renderItem={({item}) => (
            <ListItem
              name={item?.name?.en}
              key={item?.name?.en}
              buttonText={'Pick'}
              icon={<Arrow />}
              textColor={styles.actionButtonText}
              onPress={() => {
                checkAnswer();
                validAnswer === true
                  ? navigation.navigate('Correct', {
                      item,
                      otherParam: findPhrasesById,
                      parameter: validAnswer,
                      options: getRandomPhrases(),
                      title: phrase,
                    })
                  : navigation.navigate('Incorrect', {
                      item,
                      otherParam: findPhrasesById,
                      parameter: validAnswer === false,
                      options: getRandomPhrases(),
                      title: phrase,
                    });
              }}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </View>
  );
}
