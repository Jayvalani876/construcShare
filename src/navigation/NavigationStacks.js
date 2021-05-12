import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from 'src/screens/LoginScreen';
import SignupScreen from 'src/screens/SignupScreen';
import WorkingScreen from 'src/screens/WorkingScreen';
import ForgetPasswordScreen from 'src/screens/ForgetPasswordScreen';


const Stack = createStackNavigator();


export const PreLoginStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="signup">
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="signup" 
            component={SignupScreen} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="work" 
            component={WorkingScreen} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="forgetpass" 
            component={ForgetPasswordScreen} 
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
  };

  export const PostLoginStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
          name="signup" 
          component={SignupScreen} />
        </Stack.Navigator>
    );
  };
