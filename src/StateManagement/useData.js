import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import CategoriesData from '../data/categories.json';
import PhrasesData from '../data/phrases.json';

import Arrow from '../icons/arrow.svg';

const styles = StyleSheet.create({
  actionButtonText: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

export const useData = () => {
  const [phrases, setPhrases] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setPhrases(PhrasesData.phrases);
    setCategories(CategoriesData.categories);
  }, []);

  return {
    phrases,
    categories,
    isClicked,
    setIsClicked,
    isCorrect,
    setIsCorrect,
  };
};
