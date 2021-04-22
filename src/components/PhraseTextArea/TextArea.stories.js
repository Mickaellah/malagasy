import React, {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import TextArea from './TextArea'; 
 

storiesOf('TextArea', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Uneditable input field', () => <TextArea 
        value="roa ambin' ny folo" 
        editable={false} 
        multiline={true} 
        number={3} 
    />)
    .add('Editable input field', () => {
        function Parent({children}) {
            const [inputText, setInputText] = useState('');
            return <View>{children(inputText, setInputText)}</View>;
        }
        return (
            <Parent>
                {(inputText, setInputText) => (
                    <TextArea 
                        placeholder='Enter here' 
                        value={inputText.value} 
                        onChangeText={(text) => setInputText(text)} 
                        editable={true} 
                        multiline={true} 
                        number={3} 
                    />
                )}
            </Parent>
        )
    }

    )