import React, {useEffect, useState} from 'react';
import categoriesData from '../data/categories.json';

export const useList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(categoriesData);
  }, []);

  return {
    list,
  };
};
