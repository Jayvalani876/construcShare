import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';
import Help from 'src/components/Help';

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const SuccessScreen = (props) => {
return (
<View style = {styles.rootView}>
        <Image source={R.images.img_success} style = {styles.logo}/>
        <Text style={styles.success}>{R.strings.success.success}</Text>
        <Text style={styles.welcome}>{R.strings.success.welcomeBack}</Text>
        <Text style={styles.email}>{R.strings.success.email}</Text>

        <Help 
            image ={R.images.ic_help}
            label = {R.strings.success.needHelp}
            style = {styles.need}
        />

        <Press 
            title={R.strings.success.continue}
            paint={R.colors.red}
            style={styles.but}
        />
        
</View>
)
}

export default SuccessScreen;