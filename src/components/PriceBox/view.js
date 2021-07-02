import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';

import R from 'constants/R';

import styles from './styles'
import { color } from 'react-native-reanimated';

const PriceBox = (props) => {

    const { 
        title,
        paint,
        screens,
        click
        } = props;

   return (
   <View {...props}>
       <View style={styles.container}>
            
        </View>
        </View>
);
};

export default PriceBox;