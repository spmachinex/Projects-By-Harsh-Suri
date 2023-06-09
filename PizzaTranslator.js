import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
const PizzaTranslator = () => {
    const[text,setText] = useState('');
  
    return(
      <View style = {{padding:10}}>
        <TextInput  
        style={{height:50}} 
        placeholder="Type here to translate"
        placeholderTextColor='pink'
        onChangeText={newText => setText(newText)}
        defaultValue = {text} />
        <Text style={{padding: 10, fontSize: 42}}>
          {text
          .split(' ')
          .map(word && '😎')
          .join(' ')}
          </Text>
      </View>
    );
  };
  
  export default PizzaTranslator;