import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const VerificationScreen = (props) => {
return (
    <View style = {styles.rootView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.verification}>{R.strings.verification.verification}</Text>
        <Image 
            source={R.images.img_girl}
            style={styles.girl}
        />
        <Text style={styles.hurry}>{R.strings.verification.hurry}</Text>
        <Text style={styles.mailSent}>{R.strings.verification.mailSent}</Text>
        <Text style={styles.email}>{R.strings.verification.email}</Text>
        <Text 
            style={styles.clickMail}
            onPress={() => props.navigation.navigate('')}
            >
                {R.strings.verification.clickMail}
        </Text>
        <Text style={styles.findMail}>{R.strings.verification.findMail}</Text>
        <View style={styles.resendMail}>
            <Button 
                title={R.strings.verification.resendMail}
                color={R.colors.red}
            />
        </View>
    </View>
)
}

export default VerificationScreen;