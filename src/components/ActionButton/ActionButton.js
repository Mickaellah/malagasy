import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    button: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        paddingTop: 10,
    },
    text: {
        alignSelf: 'flex-end',
        textAlign: 'right',

    },
    image: {
        marginLeft: 11,
        alignSelf: 'flex-start',
    }
})

export default function ActionButton({
    buttonText, 
    onPress, 
    icon, 
    textColor
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={onPress} 
                style={styles.button}
            >
                <Text style={[textColor, styles.text]}> {buttonText}
                </Text>
                <Image 
                    source={icon} 
                    style={styles.image} 
                />
            </TouchableOpacity>
        </View>
    )
}