import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 17,
    margin: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
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
});

export default function ListItem({name, buttonText, textColor, icon, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <TouchableWithoutFeedback onPress={onPress}>
            <ActionButton
              buttonText={buttonText}
              icon={icon}
              textColor={textColor}
            />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
