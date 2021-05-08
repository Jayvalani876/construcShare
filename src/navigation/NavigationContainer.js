import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {PreLoginStackNavigator, PostLoginStackNavigator} from './NavigationStacks';


export const NavContainer = () => {
    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <NavigationContainer>
            { isAuth && <PostLoginStackNavigator/>}
            { !isAuth && <PreLoginStackNavigator/>}
        </NavigationContainer>
    );
}