import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import PhraseTextArea from './PhraseTextArea'; 

const Edit = () => {
    const [text, setText] = useState('');

    return (
        <PhraseTextArea 
            value={text}
            editable={true}
            onChangeText={(textInput) => setText(textInput)}
        />
    )
}
 

storiesOf('TextArea', module)
    .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
    .add('Uneditable input field', () => <PhraseTextArea 
        value="roa ambin' ny folo" 
        editable={false} 
    />)
    .add('Editable input field', () => <Edit />)