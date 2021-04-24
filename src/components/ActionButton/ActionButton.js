import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    text: {
        textAlign: 'justify',
        alignSelf: 'flex-end',
    },
    image: {
        marginLeft: 11,
        alignSelf: 'flex-start',
    }
})

export default function ActionButton({buttonText, onPress, icon, textColor}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[textColor, styles.text]}>{buttonText}</Text>
                <Image source={icon} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}