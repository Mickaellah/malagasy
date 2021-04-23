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
    blueButton: {
        backgroundColor: '#06B6D4',
    },
    whiteButton: {
        backgroundColor: '#ffffff',
        borderColor: '#06B6D4',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 20
    }
})

export default function NextButton({ title, onPress = () => null }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttons, styles.blueButton]} onPress={onPress}>
                <Text style={{color: '#ffffff'}}>
                    {title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, styles.whiteButton]} onPress={onPress}>
                <Text style={{color: '#06B6D4'}}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

