import React from 'react';
import { View, Button } from 'react-native';

import R from 'constants/R';

import styles from './styles'
import { color } from 'react-native-reanimated';

const Press = (props) => {

    const { 
        title,
        paint,
        // screens
        } = props;

   return (
   <View {...props}>
       <View style={styles.container}>
        <Button
            title={title}
            color={paint}
            // onPress={() => props.navigation.navigate('screens')}
            style={styles.but}
        />
        </View>
        </View>
);
};

export default Press;