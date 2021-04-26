import React from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';


import ActionButton from './ActionButton';
import Arrow from '../../icons/arrow.svg';
import Correct from '../../icons/correct.svg';
import Wrong from '../../icons/wrong.svg';

const styles = StyleSheet.create({
    blueText: {
        color: "#06B6D4",
    },
    greenText: {
        color: "#06D440",
    },
    purpleText: {
        color: "#D4068E",
    }
})

storiesOf('Action button', module)
    .addDecorator(story => <View style={{padding: 20}
    }>{story()}</View>)
    .add('Action Button', () => {
        return (
            <View>
                <ActionButton 
                    buttonText="Learn" 
                    onPress={() => alert('Learn more!')}  
                    icon={<Arrow />}
                    textColor={styles.blueText} 
                />
                <ActionButton 
                    buttonText="Pick" 
                    onPress={() => alert('Pick a solution.')}
                    icon={<Arrow />}
                    textColor={styles.blueText} 
                />
                <ActionButton 
                    buttonText="Correct" 
                    onPress={() => alert('Your answer is correct.')} 
                    icon={<Correct />}
                    textColor={styles.greenText} 
                />
                <ActionButton 
                    buttonText="Wrong" 
                    onPress={() => alert('Your answer is wrong.')} 
                    icon={<Wrong />}
                    textColor={styles.purpleText} 
                />
            </View>
        )
    })