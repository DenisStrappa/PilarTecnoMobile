import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import { styles } from "./styles";

export default Home = ({ navigation }) => {
  const onPressHandle = (action) => {
    switch (action) {
      case "Home":
        Alert.alert("Invalid Request", "Usted ya se encuentra en Home", [
          { text: "Ok", onPress: () => console.log("Perfecto") },
        ]);
        break;

      default:
        navigation.navigate(action);
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.mainContent} source={require('../../assets/images/bgGreenYellow.png')}>
        <View>
          <Pressable
            onPress={() => onPressHandle("Home")}
            style={[styles.buttonContent, { backgroundColor: "#CEEE74" }]}
          >
            <Text style={styles.textButton}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressHandle("Profile")}
            style={[styles.buttonContent, { backgroundColor: "#E13226" }]}
          >
            <Text style={styles.textButton}>Profile</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => onPressHandle("Mapa")}
            style={[styles.buttonContent, { backgroundColor: "#F0D23D" }]}
          >
            <Text style={styles.textButton}>Mapa</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressHandle("List")}
            style={[styles.buttonContent, { backgroundColor: "#55D3F7" }]}
          >
            <Text style={styles.textButton}>List</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
