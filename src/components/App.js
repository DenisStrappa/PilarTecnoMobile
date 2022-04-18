import 'react-native-gesture-handler';
import React, { useEffect, useCallback } from 'react';
import { 
    View, 
    Text
} from 'react-native';
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../routs/app';
import {Provider} from 'react-redux';
import { store } from '../store';
import { hasLocationPermission } from '../LocationPermission'

export default App = () => {

    useEffect(()=>{
        hasLocationPermission()
    }, [])

    return(
        <Provider store={store}>
            <NavigationContainer >
                <AppStack />
            </NavigationContainer>
        </Provider>
    )
}