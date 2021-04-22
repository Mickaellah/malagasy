import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    textArea: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'rgba(229, 229, 229, 1)',
        borderRadius: 3,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 24.2,
    }
})

export default function TextArea({placeholder, value = '', multiline, number}) {
    const [inputText, setInputText] = useState(value);
    console.log(inputText);
    return (
        <View style={styles.container}>
            <TextInput style={styles.textArea} multiline={multiline} numberOfLines={number} value={inputText} placeholder={placeholder} onChangeText={(text) => setInputText(text)} />
        </View>
    )
}