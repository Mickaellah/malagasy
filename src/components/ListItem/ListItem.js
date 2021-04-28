import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

export default function ListItem({name, onPress}) {
  return (
    <View>
      <TouchableWithoutFeedback style={styles.list} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
