import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const SignupScreen = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

return (

<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <View style={styles.accLog}>
            <Text style={styles.acc}>{R.strings.signUp.account}</Text>
            <Text 
            style={styles.login} 
            onPress={() => props.navigation.navigate('login')}>
               {R.strings.signUp.logIn}
            </Text>
        </View>
        <Text style={styles.hello}>{R.strings.signUp.hi}</Text>
        <Text style={styles.createAccount}>{R.strings.signUp.createAccount}</Text>
        
        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.signUp.email}
        id = "email"
        placeholder = {R.strings.signUp.emailPlaceholder}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
        />

        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.signUp.password}
        id = "password"
        placeholder = {R.strings.signUp.passwordPlaceholder}
        secureTextEntry
        onInputChangeHandler = { text => {
            setPassword(text)
        }}
        />
        
        <Input
        style= {[styles.input, styles.email]}
        label = {R.strings.signUp.reEnterPassword}
        id = "re-password"
        placeholder = {R.strings.signUp.passwordPlaceholder}
        secureTextEntry
        onInputChangeHandler = { text => {
            setPassword(text)
        }}
        />

        <Press 
            title={R.strings.signUp.signUp}
            paint={R.colors.red}
            style={styles.but}
            click={() => props.navigation.navigate('verification')}
        />
       
           <View style={styles.rap}>
           <Text style={styles.txt}>{R.strings.signUp.whySignUp}</Text>
           <Image source={R.images.img_login_call} style={styles.img} />
        </View>
        
        <Text style={styles.connect}>{R.strings.signUp.connect}</Text>
        
        <Press 
            title={R.strings.signUp.works}
            paint={R.colors.black}
            style={styles.but}
            click = {() => props.navigation.navigate('work')}
        />

    </View>
</View>
)
}

export default SignupScreen;