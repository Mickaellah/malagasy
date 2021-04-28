import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

export default function ListItem({name, onPress}) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text>{name}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
