import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttons: {
    backgroundColor: '#06B6D4',
    margin: 10,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default function ToolButton({icon, onPress, style}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.buttons, style]} onPress={onPress}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}
