import React from 'react';
import { View, Text, Image } from 'react-native';

import R from 'constants/R';

import styles from './styles'
import { color } from 'react-native-reanimated';

const Help = (props) => {

    const { 
        image, 
        label, 
        } = props;

   return (
   <View {...props}>
       <View style={styles.container}>
       {image ? <Image source={image} style = {styles.help}/> : null}
       <Text style={styles.needHelp}>{label}</Text>
        </View>
        </View>
);
};

export default Help;