import React from 'react';
import CategoryList from '../components/CategoryList/CategoryList';
import DisplayPhrases from '../components/DisplayPhrases/DisplayPhrases';
import CorrectAnswer from '../components/CorrectAnswer/CorrectAnswer';
import Incorrect from '../components/Incorrect/Incorrect';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={CategoryList} />
        <Stack.Screen name="Learning" component={DisplayPhrases} />
        <Stack.Screen name="Correct" component={CorrectAnswer} />
        <Stack.Screen name="Incorrect" component={Incorrect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ListStack;
