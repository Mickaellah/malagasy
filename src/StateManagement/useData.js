import {useEffect, useState} from 'react';
import CategoriesData from '../data/categories.json';
import PhrasesData from '../data/phrases.json';

export const useData = () => {
  const [phrases, setPhrases] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomOptions, setRandomOptions] = useState([]);
  const [randomPhrase, setRandomPhrase] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setPhrases(PhrasesData.phrases);
    setCategories(CategoriesData.categories);
    setRandomPhrase(PhrasesData.phrases);
  }, []);

  return {
    phrases,
    categories,
    isClicked,
    setIsClicked,
    isCorrect,
    setIsCorrect,
    randomOptions,
    setRandomOptions,
    randomPhrase,
    setRandomPhrase,
  };
};
