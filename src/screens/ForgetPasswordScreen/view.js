import React from 'react';
import {View, Text, Image, TextInput, Button,} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';
import Help from 'src/components/Help';

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const ForgetPasswordScreen = (props) => {
return (
<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_forget_password} style = {styles.logo}/>
        <Text style={styles.txt_forget}>{R.strings.forgetPass.forget}</Text>
        <Text style={styles.txt_enterEmail}>{R.strings.forgetPass.enterEmail}</Text>
        
        <Input
        style= {[styles.input, styles.email]}
        image = {R.images.ic_mail}
        label = {R.strings.logIn.email}
        id = "email"
        placeholder = {R.strings.logIn.emailPlaceholder}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
        />

        <Press 
            title={R.strings.forgetPass.submit}
            paint={R.colors.red}
            style={[styles.butt, styles.but]}
            click={() => props.navigation.navigate('resetPass')}
        />

        <View style={styles.rap}>
            <Text style={styles.noAccount}>{R.strings.logIn.noAccount}</Text>
            <Text style={styles.signup}>{R.strings.logIn.signUpHere}</Text>
        </View>

         <Help 
            image ={R.images.ic_help}
            label = {R.strings.logIn.needHelp}
            style = {styles.need}
        />
       
    </View>
</View>
)
}

export default ForgetPasswordScreen;