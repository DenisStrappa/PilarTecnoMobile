import React, { Component, useCallback } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import List from '../screens/List'
import ListItem from '../screens/ListItem'
import Profile from '../screens/Profile'
import Mapa from '../screens/Map'
import Login from '../screens/Auth/SignIn'
import { Tabs } from './Tabs'
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default AppStack = (props) => {

  const user = useSelector(state=>state.user.user)

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?
        <Stack.Screen name="AppStack" component={Tabs} />
        :
        <Stack.Screen name="Login" component={Login} />
        }
        <Stack.Screen name="Map" component={Mapa} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListItem" component={ListItem} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }