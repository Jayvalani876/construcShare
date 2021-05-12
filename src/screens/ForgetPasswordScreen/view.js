import React from 'react';
import {View, Text, Image, TextInput, Button,} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const ForgetPasswordScreen = (props) => {
return (
<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_forget_password} style = {styles.logo}/>
        <Text style={styles.txt_forget}>{R.strings.forgetpass.forget}</Text>
        <Text style={styles.txt_enterEmail}>{R.strings.forgetpass.enterEmail}</Text>
        
        <Text style={styles.email}>{R.strings.logIn.email}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_mail} style = {styles.imgstyle}/>
        <TextInput 
            placeholder={R.strings.logIn.emailPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>

        <View style={styles.but}>
        <Button 
            title= {R.strings.forgetpass.submit}
            color={R.colors.red}
        />
        </View>

        <View style={styles.rap}>
            <Text style={styles.noaccount}>{R.strings.logIn.noAccount}</Text>
            <Text style={styles.signup}>{R.strings.logIn.signUpHere}</Text>
        </View>
        <Image source={R.images.ic_help} style = {styles.help}/>
        <Text style={styles.needhelp}>{R.strings.logIn.needHelp}</Text>
       
    </View>
</View>
)
}

export default ForgetPasswordScreen;