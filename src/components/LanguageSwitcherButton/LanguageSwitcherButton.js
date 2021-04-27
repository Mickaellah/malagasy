import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
  },
  leftText: {
    marginRight: 6,
  },
  rightText: {
    marginLeft: 6,
  },
});

export default function LanguageSwitcherButton({
  english,
  malagasy,
  onPress,
  icon,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.wrapper}>
          <Text style={[styles.buttonText, styles.leftText]}>{english}</Text>
          {icon}
          <Text style={[styles.buttonText, styles.rightText]}>{malagasy}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
