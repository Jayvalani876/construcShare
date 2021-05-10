import React from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const LoginScreen = () => {
return (<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.welcome}>{R.strings.logIn.welcomeBack}</Text>

        <Text style={styles.email}>{R.strings.logIn.email}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_mail} style = {styles.imgstyle}/>
        <TextInput 
            placeholder={R.strings.logIn.emailPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>
        
        <Text style={styles.password}>{R.strings.logIn.password}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_lock} style = {styles.imagestyle}/>
        <TextInput 
            placeholder={R.strings.logIn.passwordPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>
        <Text style={styles.forgetpass}>{R.strings.logIn.forgetPassword}</Text>
        <View style={styles.button}>
        <Button 
            title={R.strings.logIn.logIn}
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
</View>)
}

export default LoginScreen;