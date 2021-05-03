import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PhrasesData from '../../data/phrases.json';
import CategoriesData from '../../data/categories.json';

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

export const useCorrectPhrase = () => {
  const [phrases, setPhrases] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setPhrases(PhrasesData.phrases);
    setCategories(CategoriesData.categories);
  }, []);

  const phraseId = phrases.filter(phr => phr.id);

  return {
    phrases,
    categories,
    phraseId,
  };
};
