import React, {useCallback, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import Storybook from './storybook';
import App from './App';

const Root = () => {
  const [storybookActive, setStorybookActive] = useState(false);
  const toggleStorybook = useCallback(
    () => setStorybookActive(active => !active),
    [],
  );

  useEffect(() => {
    if (__DEV__) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const DevMenu = require('react-native-dev-menu');
      DevMenu.addItem('Toggle Storybook', toggleStorybook);
    }
  }, [toggleStorybook]);

  return storybookActive ? (
    <Storybook />
  ) : (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
