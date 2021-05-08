import {useEffect, useState} from 'react';
import CategoriesData from '../data/categories.json';
import PhrasesData from '../data/phrases.json';

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
