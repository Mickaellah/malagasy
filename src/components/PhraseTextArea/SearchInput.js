import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingHorizontal: 16,
    }
})

export default function SearchInput({placeholder}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}