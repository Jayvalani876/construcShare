import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const SuccessScreen = (props) => {
return (
<View style = {styles.rootView}>
        <Image source={R.images.img_success} style = {styles.logo}/>
        <Text style={styles.success}>{R.strings.success.success}</Text>
        <Text style={styles.welcome}>{R.strings.success.welcomeBack}</Text>
        <Text style={styles.email}>{R.strings.success.email}</Text>
        <Text style={styles.continue}>{R.strings.success.continue}</Text>
        <Image source={R.images.ic_help} style = {styles.help}/>
        <Text style={styles.needhelp}>{R.strings.logIn.needHelp}</Text>
        <View style={styles.continue}>
        <Button 
            title={R.strings.success.continue}
            color={R.colors.red}
        />
        </View>
</View>
)
}

export default SuccessScreen;