import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    marginHorizontal: 'auto',
    padding: 0,
  },
  heading: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    fontStyle: 'normal',
    marginBottom: 15,
  },
});

export default function SectionHeading({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}
