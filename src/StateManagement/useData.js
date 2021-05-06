import React, {useEffect, useState} from 'react';
import CategoriesData from '../data/categories.json';
import PhrasesData from '../data/phrases.json';

export const useData = () => {
  const [phrases, setPhrases] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonText, setButtonText] = useState('Pick');

  useEffect(() => {
    setPhrases(PhrasesData.phrases);
    setCategories(CategoriesData.categories);
  }, []);

  return {
    phrases,
    categories,
    isCorrect,
    setIsCorrect,
    buttonText,
    setButtonText,
  };
};
