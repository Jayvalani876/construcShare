import React from 'react';
import {View, Text, Image, TextInput,} from 'react-native';

import R from 'constants/R';

import styles from './styles'
import { color } from 'react-native-reanimated';

const Input = (props) => {

    const { image, 
        label, 
        placeholder, 
        onInputChangeHandler, 
        value, 
        id,
        secureTextEntry,
        } = props;

   return (
   <View {...props}>
       <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
        {image ? <Image source={image} style = {styles.img}/> : null}
        <TextInput 
            value = {value}
            onChangeText={onInputChangeHandler.bind(this, id)}
            placeholder={placeholder}
            placeholderTextColor= {R.colors.black}
            style={styles.input}
            secureTextEntry = {secureTextEntry}
        />
        </View>
        </View>

    </View>
);
};

export default Input;