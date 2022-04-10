//! Componente Principal de navegación

import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "./Tabs";
import LogIn from "../screens/Auth/SignIn/index";
import Profile from "../screens/Profile";
import Mapa from "../screens/Mapa";
import List from "../screens/List";
import Detail from "../screens/Detail";
import { useSelector } from "react-redux";
//! Crea una nueva pila para controlar el flujo de login
const Stack = createStackNavigator();
export default AppStack = (props) => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user != null ? (
        <>
          <Stack.Screen name="Tab" component={Tabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mapa" component={Mapa} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Detail" component={Detail} />
        </>
      ) : (
        <Stack.Screen name="LogIn" component={LogIn} />
      )}
    </Stack.Navigator>
  );
};
