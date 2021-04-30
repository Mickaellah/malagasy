import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ActionButton from '../ActionButton/ActionButton';
import Arrow from '../../icons/arrow.svg';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 17,
    margin: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    backgroundColor: '#ffffff',
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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <ActionButton
            buttonText={'Learn'}
            icon={<Arrow />}
            textColor={styles.learnButtonColor}
            onPress={() => navigation.navigate('Learning')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
