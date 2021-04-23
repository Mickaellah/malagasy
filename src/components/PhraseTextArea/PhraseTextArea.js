import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginVertical: 0,
        marginHorizontal: 'auto',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#E5E5E5',
        borderWidth: 1,
    },
    textArea: {
        color: '#111827',
        maxWidth: 360,
        marginHorizontal: 'auto',
        fontSize: 20,
        lineHeight: 24.2,
    }
})

export default function TextArea({
    editable, 
    value, 
    onChangeText = () => null, 
}) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textArea} 
                editable={editable} 
                multiline={true} 
                numberOfLines={3} 
                value={value} 
                placeholder="Enter here" 
                onChangeText={onChangeText} 
            />
        </View>
    )
}