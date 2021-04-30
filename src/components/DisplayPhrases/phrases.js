import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PhrasesData from '../../data/phrases.json';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});

export const Separator = () => {
  return <View style={styles.separator} />;
};

export const usePhrasesList = () => {
  const [phrases, setPhrases] = useState([]);
  const [randomPhrases, setRandomPhrases] = useState({});
  const [randomOption, setRandomOption] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setPhrases(PhrasesData.phrases);
    setRandomPhrases(PhrasesData.phrases);
  }, []);

  function getRandomPhrases() {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    const randomOpt1 = phrases[Math.floor(Math.random() * phrases.length)];
    const randomOpt2 = phrases[Math.floor(Math.random() * phrases.length)];
    const randomOpt3 = phrases[Math.floor(Math.random() * phrases.length)];
    const randomOptions = [random, randomOpt1, randomOpt2, randomOpt3];

    setRandomOption(randomOptions);
    setRandomPhrases(random);
  }

  useEffect(() => {
    getRandomPhrases();
  }, [phrases]);

  function checkCorrectAnswer(e) {
    e.preventDefault();
    setIsCorrect(true);
    setIsClicked(true);

    const correctAnswer = randomPhrases.name.en;
    const userGuess = e.currentTarget.value;

    if (correctAnswer === userGuess) {
      e.currentTarget.classList.add();
      setPhrases(phrases);
    } else {
      setIsCorrect(false);
    }
  }

  return {
    phrases,
    getRandomPhrases,
    randomPhrases,
    randomOption,
  };
};
