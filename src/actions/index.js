import PhrasesData from '../data/phrases.json';

export function getPhrases() {
  return async dispatch => {
    const data = PhrasesData;
    dispatch({
      type: 'GET_PHRASES',
      value: data,
    });
  };
}
