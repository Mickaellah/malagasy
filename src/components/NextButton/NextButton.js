import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 10,
    paddingLeft: 27,
    paddingRight: 31,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
  },
});

export default function NextButton({
  title,
  style,
  textColor,
  onPress = () => null,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.buttons, style]} onPress={onPress}>
        <Text style={textColor}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
