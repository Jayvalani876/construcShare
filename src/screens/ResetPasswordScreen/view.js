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

const ResetPasswordScreen = (props) => {
return (
    <View style = {styles.rootView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.reset}>{R.strings.resetPass.reset}</Text>

        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.resetPass.email}
        id = "email"
        placeholder = {R.strings.resetPass.emailPlaceholder}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
        />

        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.resetPass.password}
        id = "password"
        placeholder = {R.strings.resetPass.passwordPlaceholder}
        secureTextEntry
        onInputChangeHandler = { text => {
            setPassword(text)
        }}
        />
        
        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.resetPass.reEnterPassword}
        id = "re-password"
        placeholder = {R.strings.resetPass.passwordPlaceholder}
        secureTextEntry
        onInputChangeHandler = { text => {
            setPassword(text)
        }}
        />

        <Press 
            title={R.strings.resetPass.submit}
            paint={R.colors.red}
            style={styles.butt}
            click={() => props.navigation.navigate('success')}
        />
        
        <Press 
            title={R.strings.resetPass.cancel}
            paint={R.colors.grey}
            style={styles.but}
            click={() => props.navigation.navigate('login')}
        />

        <Help 
            image ={R.images.ic_help}
            label = {R.strings.resetPass.needHelp}
            style = {styles.need}
        />

    </View>
)
}

export default ResetPasswordScreen;