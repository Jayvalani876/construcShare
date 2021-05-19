import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';

///styles
import styles from './styles';

///constants
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
            onPress={() => props.navigation.navigate('uen')}
            >
                {R.strings.verification.clickMail}
        </Text>
        <Text style={styles.findMail}>{R.strings.verification.findMail}</Text>


        <Press 
            title={R.strings.verification.resendMail}
            paint={R.colors.red}
            style={styles.but}
        />

    </View>
)
}

export default VerificationScreen;