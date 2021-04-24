import React from 'react';
import {View, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';


import ActionButton from './ActionButton';
import RightArrow from '../../icons/RightArrow.png';
import CorrectAnswer from '../../icons/CorrectAnswer.png';
import WrongAnswer from '../../icons/WrongAnswer.png';

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
                    onPress={() => alert('Learn more!')} icon={RightArrow} 
                    textColor={styles.blueText} 
                />
                <ActionButton 
                    buttonText="Pick" 
                    onPress={() => alert('Pick a solution.')} 
                    icon={RightArrow} 
                    textColor={styles.blueText} 
                />
                <ActionButton 
                    buttonText="Correct" 
                    onPress={() => alert('Your answer is correct.')} 
                    icon={CorrectAnswer} 
                    textColor={styles.greenText} 
                />
                <ActionButton 
                    buttonText="Wrong" 
                    onPress={() => alert('Your answer is wrong.')} 
                    icon={WrongAnswer} 
                    textColor={styles.purpleText} 
                />
            </View>
        )
    })