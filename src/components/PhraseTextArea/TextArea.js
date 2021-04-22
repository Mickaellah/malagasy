import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 23,
    },
    textArea: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        color: '#000000',
        borderColor: 'rgba(229, 229, 229, 1)',
        borderRadius: 3,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 24.2,
    }
})

export default function TextArea({
    placeholder, 
    editable, 
    value, 
    onChangeText, 
    multiline, 
    number
}) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textArea} 
                editable={editable} 
                multiline={multiline} 
                numberOfLines={number} 
                value={value} 
                placeholder={placeholder} 
                onChangeText={onChangeText} 
            />
        </View>
    )
}