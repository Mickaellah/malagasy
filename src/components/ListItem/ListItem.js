import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import Arrow from '../../icons/arrow.svg';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 17,
    margin: 0,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    textAlignVertical: 'center',
  },
  learnButtonColor: {
    color: '#06B6D4',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});

export default function ListItem({name, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <ActionButton
            buttonText={'Learn'}
            icon={<Arrow />}
            textColor={styles.learnButtonColor}
            onPress={() => alert('Learn more!')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
