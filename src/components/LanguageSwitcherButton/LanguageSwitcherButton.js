import React from 'react';
import {View, Text, TouchableOpacity, Stylesheet} from 'react-native';

export default function LanguageSwitcherButton() {
  return (
    <View>
      <TouchableOpacity>
        <Text>En</Text>
        <Text>Ma</Text>
      </TouchableOpacity>
    </View>
  );
}
