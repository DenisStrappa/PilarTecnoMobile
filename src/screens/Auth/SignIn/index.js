import React, { Component, useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { theme } from "../../../constans";
import { styles } from "./styles";
import { setUserAction } from "../../../store/actions/user.action";

export default LogIn = () => {
  const usrInfo = {
    name: "Juan Pablo",
    lastName: "Ocampo",
    userName: "orJuanPablo",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quisquam eius dolor molestiae amet necessitatibus veniam doloribus, sequi omnis. Facere in quos tempora dolore recusandae. Odit error praesentium adipisci dolor.",
  };
  const dispatcher = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const _signIn = () => {
    if (email && pass) {
      usrInfo.email = email;
      usrInfo.pass = pass;
      dispatcher(setUserAction(usrInfo));
      AsyncStorage.setItem("@user", JSON.stringify(usrInfo));
    } else {
      return false;
    }
  };
  useEffect(() => {
    const _getStorage = async () => {
      try {
        const keys = (await AsyncStorage.getAllKeys()).length;
        console.log(keys);
        if (keys > 0) {
          const adata = JSON.parse(await AsyncStorage.getItem("@user"));
          console.log(adata);
          dispatcher(setUserAction(adata));
        }
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
    };
    _getStorage();
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../../assets/images/bgGreenYellow.png")}
        style={styles.container}
      >
        <View style={styles.logInContainer}>
          <Text style={styles.signInTitle}>SignIn</Text>
          <Input
            label={"E-mail"}
            leftIcon={
              <Icon
                name="email"
                type="entypo"
                size={24}
                color={theme.colors.active}
              />
            }
            placeholder="E-Mail"
            placeholderTextColor={theme.colors.active}
            labelStyle={styles.label}
            inputStyle={styles.input}
            onChangeText={setEmail}
          />
          <Input
            label={"Contraseña"}
            leftIcon={
              <Icon
                name="lock"
                type="entypo"
                size={24}
                color={theme.colors.active}
              />
            }
            labelStyle={styles.label}
            inputStyle={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.active}
            secureTextEntry={true}
            onChangeText={setPass}
          />
          <Button
            title="Aceptar"
            buttonStyle={styles.buttonStyle}
            onPress={() => _signIn()}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
