import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import { theme } from "../constans";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import List from "../screens/List";
import Mapa from "../screens/Mapa";
const Tab = createMaterialBottomTabNavigator();
export const Tabs = () => {
  const { colors } = theme;
  return (
    <Tab.Navigator
      activeColor={colors.active} //'#f5c511' //'rgb(41,34,97)',
      inactiveColor={colors.inactive}
      barStyle={{
        backgroundColor: colors.bar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"home"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"user"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name={"marker"}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"map"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
