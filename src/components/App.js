import React, { Component, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../routes/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { hasLocationPermission } from "../LocationPermissions";

export default App = () => {
  useEffect(() => {
    hasLocationPermission();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
