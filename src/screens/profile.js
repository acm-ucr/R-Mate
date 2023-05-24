import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../components/Profile";
import Account from "../components/Account";
import Notifications from "../components/Notifications";
import Bug from "../components/Bug";
import Feedback from "../components/Feedback";
const screenOptions = {
  headerShown: false,
};
const ProfileStack = createNativeStackNavigator();
const ProfileScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={screenOptions}
      />
      <ProfileStack.Screen
        name="Account"
        component={Account}
        options={screenOptions}
      />
      <ProfileStack.Screen
        name="Notification"
        component={Notifications}
        options={screenOptions}
      />
      <ProfileStack.Screen name="Bug" component={Bug} options={screenOptions} />
      <ProfileStack.Screen
        name="Feedback"
        component={Feedback}
        options={screenOptions}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileScreen;
