import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from 'src/screens/LoginScreen';
import SignupScreen from 'src/screens/SignupScreen';
import WorkingScreen from 'src/screens/WorkingScreen';
import ForgetPasswordScreen from 'src/screens/ForgetPasswordScreen';
import ResetPasswordScreen from 'src/screens/ResetPasswordScreen';
import SuccessScreen from 'src/screens/SuccessScreen';
import VerificationScreen from 'src/screens/VerificationScreen';
import UENScreen from 'src/screens/UENScreen';
import FreelancerScreen from 'src/screens/FreelancerScreen';
import SubscriptionRateScreen from 'src/screens/SubscriptionRateScreen';
import SubscriptionTerms from 'src/screens/SubscriptionTerms';


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
            name="forgetPass" 
            component={ForgetPasswordScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="resetPass" 
            component={ResetPasswordScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="success" 
            component={SuccessScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="verification" 
            component={VerificationScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="uen" 
            component={UENScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="freelancer" 
            component={FreelancerScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="subscriptionRate" 
            component={SubscriptionRateScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="subscriptionTerms" 
            component={SubscriptionTerms} 
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
