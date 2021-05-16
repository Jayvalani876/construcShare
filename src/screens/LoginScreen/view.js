import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button ,TouchableOpacity} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press'

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const LoginScreen = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

return (
<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.welcome}>{R.strings.logIn.welcomeBack}</Text>

        <Input
        style= {styles.input}
        image = {R.images.ic_mail}
        label = {R.strings.logIn.email}
        id = "email"
        placeholder = {R.strings.logIn.emailPlaceholder}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
        />

        <Input
        style={[styles.input, styles.password]}
        image = {R.images.ic_lock}
        label = {R.strings.logIn.password}
        id = "password"
        placeholder = {R.strings.logIn.passwordPlaceholder}
        secureTextEntry
        onInputChangeHandler = { text => {
            setPassword(text)
        }}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('forgetPass')}>
            <Text style={styles.forgetPass}>
                {R.strings.logIn.forgetPassword}
            </Text>
        </TouchableOpacity>

        <Press 
            title={R.strings.logIn.logIn}
            paint={R.colors.red}
            style={styles.but}
        />

        {/* <View style={styles.button}>
        <Button 
            title={R.strings.logIn.logIn}
            color={R.colors.red}
        />
        </View> */}

        <View style={styles.rap}>
            <Text style={styles.noAccount}>{R.strings.logIn.noAccount}</Text>
            <Text style={styles.signup}>{R.strings.logIn.signUpHere}</Text>
        </View>
        <Image source={R.images.ic_help} style = {styles.help}/>
        <Text style={styles.needHelp}>{R.strings.logIn.needHelp}</Text>
    </View>
</View>
);
}

export default LoginScreen;