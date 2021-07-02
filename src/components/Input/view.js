import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';

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
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View {...props}>
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.inputContainer}>
                        {image ? <Image source={image} style={styles.img} /> : null}
                        <TextInput
                            value={value}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={onInputChangeHandler.bind(this, id)}
                            placeholder={placeholder}
                            placeholderTextColor={R.colors.black}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
};

export default Input;