import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
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
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        paddingTop: 10,
    },
    itemWrapper: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        paddingRight: 11,
    },
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
                <View style={styles.itemWrapper}>
                    <Text style={[textColor, styles.text]}> 
                        {buttonText}
                    </Text>
                    {icon}
                </View>
            </TouchableOpacity>
        </View>
    )
}