
import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import HomeStackScreen from './HomeStack'
// import ProfileStackScreen from './ProfileStack'
// import MapStackScreen from './MapStack'
// import ListStackScreen from './ListStack'
import { Icon } from 'react-native-elements'
import { theme } from '../constants'
import Home from '../screens/Home'
import List from '../screens/List'
import Profile from '../screens/Profile'
import Mapa from '../screens/Map'


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  const { colors } = theme
  return (
   
      <Tab.Navigator 
        headerMode="none"
        activeColor= {colors.active}//'#f5c511' //'rgb(41,34,97)',
        inactiveColor= {colors.inactive}
        barStyle={{
          backgroundColor:colors.bar
        }}
      >
        <Tab.Screen name="Casa" component={Home} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Perfil" component={Profile} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Lista" component={List} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Mapa" component={Mapa} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}