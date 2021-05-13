import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const SignupScreen = (props) => {
return (
<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <View style={styles.acclog}>
            <Text style={styles.acc}>{R.strings.signUp.account}</Text>
            <Text 
            style={styles.login} 
            onPress={() => props.navigation.navigate('login')}>
               {R.strings.signUp.logIn}
            </Text>
        </View>
        <Text style={styles.hello}>{R.strings.signUp.hi}</Text>
        <Text style={styles.createAccount}>{R.strings.signUp.createAccount}</Text>
        
        <Text style={styles.sign}>{R.strings.signUp.email}</Text>
        <TextInput 
            placeholder={R.strings.signUp.emailPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />

        <Text style={styles.sign}>{R.strings.signUp.password}</Text>
        <TextInput 
            placeholder={R.strings.signUp.passwordPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />

        <Text style={styles.sign}>{R.strings.signUp.reEnterPassword}</Text>
        <TextInput 
            placeholder={R.strings.signUp.passwordPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        <View style={styles.button}>
        <Button 
            title={R.strings.signUp.signUp}
            color={R.colors.red}
            onPress={() => props.navigation.navigate('verification')}
        />
        </View>
       
        <View style={styles.rap}>
           <Text style={styles.txt}>{R.strings.signUp.whySignUp}</Text>
           <Image source={R.images.img_login_call} style={styles.img} />
        </View>
        
        <Text style={styles.connect}>{R.strings.signUp.connect}</Text>
        <View style={styles.but}>
        <Button 
            title={R.strings.signUp.works}
            color={R.colors.black}
            onPress={() => props.navigation.navigate('work')}
        />
        </View>
    </View>
</View>
)
}

export default SignupScreen;