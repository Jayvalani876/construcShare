import React from 'react';
import {View, Text, CheckBox} from 'react-native';

import R from 'constants/R';

import styles from './styles'
import { color } from 'react-native-reanimated';

const Select = (props) => {

    const { 
        label,
        value,
        onSelectChangeHandler,
        id
        } = props;

   return (
   <View {...props}>
       <View style={styles.container}>
            <CheckBox 
                value={value}
                onValueChange={onSelectChangeHandler.bind(this, id)}
                style={styles.select}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    </View>
);
};

export default Select;