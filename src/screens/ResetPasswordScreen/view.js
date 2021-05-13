import React from 'react';
import {View, Text, Image, TextInput, Button,} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const ResetPasswordScreen = (props) => {
return (
    <View style = {styles.rootView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.reset}>{R.strings.resetpass.reset}</Text>

        <Text style={styles.email}>{R.strings.resetpass.email}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_mail} style = {styles.imgstyle}/>
        <TextInput 
            placeholder={R.strings.resetpass.emailPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>
        
        <Text style={styles.password}>{R.strings.resetpass.password}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_lock} style = {styles.imagestyle}/>
        <TextInput 
            placeholder={R.strings.logIn.passwordPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>

        <Text style={styles.password}>{R.strings.resetpass.reEnterPassword}</Text>
        <View style={styles.selectionstyle}>
        <Image source={R.images.ic_lock} style = {styles.imagestyle}/>
        <TextInput 
            placeholder={R.strings.resetpass.passwordPlaceholder}
            placeholderTextColor= {R.colors.black}
            style={styles.txtimput}
        />
        </View>
        
        <View style={styles.butt}>
            <Button 
                title={R.strings.resetpass.submit}
                color={R.colors.red}
                onPress={() => props.navigation.navigate('success')}
            />
        </View>

        <View style={styles.but}>
            <Button 
                title={R.strings.resetpass.cancle}
                color={R.colors.grey}
            />
        </View>

        <Image source={R.images.ic_help} style = {styles.help}/>
        <Text style={styles.needhelp}>{R.strings.logIn.needHelp}</Text>

    </View>
)
}

export default ResetPasswordScreen;