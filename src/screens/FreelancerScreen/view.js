import React from 'react';
import {View, Text, Image, } from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';
import Select from 'src/components/Select';

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const FreelancerScreen = (props) => {

return (
<View style = {styles.rootView}>
    <View>
    <Image 
        source={R.images.img_background1}
        style={styles.background}
    />
    </View>
</View>
)
}

export default FreelancerScreen;