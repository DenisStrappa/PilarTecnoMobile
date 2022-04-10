import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Avatar, Button, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../constans";
import { setUserAction } from "../../store/actions/user.action";
import { styles } from "./styles";

export default Profile = () => {
  const usr = useSelector((state) => state.userReducer.user);
  const dispatcher = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <View style={styles.cardContainer}>
          <View style={styles.infoContainer}>
            <Avatar
              size="large"
              rounded
              source={require("../../assets/images/ErenJaeger.jpg")}
            />
            <View style={styles.column}>
              <Text style={styles.usrName}>{usr?.userName}</Text>
              <Text style={styles.names}>
                {usr?.lastName}, {usr?.name}
              </Text>
              <Text>{usr?.email}</Text>
            </View>
            <Icon
              name="logout"
              type="MaterialIcons"
              size={24}
              color='red'
              onPress={() => {
                AsyncStorage.removeItem("@user");
                dispatcher(setUserAction(null));
              }}
            />
          </View>
          <ScrollView style={styles.bio}>
            <Text>{usr?.bio}</Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
