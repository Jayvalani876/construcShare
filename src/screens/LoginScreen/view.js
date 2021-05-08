import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const isLogn = true;

const LoginScreen = () => {

const loginScreen = () => {
    return (<Text style={styles.textColor}>Login Screen</Text>);
}

const tempScreen = () => {
    return (<Text>Temp Screen</Text>);
}

return (<View>
    {isLogn ? loginScreen() : tempScreen()}
</View>)
}

export default LoginScreen;