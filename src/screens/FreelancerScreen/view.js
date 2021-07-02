import React from 'react';
import {View, Text, Image, TextInput, } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';


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
    <View style={{flex: 1,}}>
    <Image 
        source={R.images.img_background1}
        style={styles.background}
    />
    </View>
    <BottomSheet isOpen>
        <Text style={styles.nonUen}>{R.strings.freeLancer.nonUen}</Text>
        <Text style={styles.content}>{R.strings.freeLancer.content}</Text>
        <TextInput 
            placeholder={R.strings.freeLancer.registeredUen}
            placeholderTextColor={R.colors.black}
            style={styles.registeredUen}
        />
        <Press
            title={R.strings.freeLancer.subscribe}
            paint={R.colors.red}
            style={[styles.butt, styles.but]}
            click={() => props.navigation.navigate('subscriptionRate')} 
        />
        <Press
            title={R.strings.freeLancer.back}
            paint={R.colors.black}
            style={[styles.butt, styles.button]}
            click={() => props.navigation.navigate('uen')} 
        />
        <View style={{marginBottom: 20}}></View>
    </BottomSheet>
</View>
)
}

export default FreelancerScreen;