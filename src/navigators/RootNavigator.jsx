import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login.js";
import loading from "../screens/loading.js";
import Navigator from "./Navigator.jsx";
import LogoutScreen from "../screens/logout.js";
import profile from "../screens/profile.js";
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="ProfileInformation"
        component={profile}
        options={screenOptions}
      />
      <Stack.Screen
        name="Navigator"
        component={Navigator}
        options={screenOptions}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={loading}
        options={screenOptions}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
