import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import SRC from "../components/SRC";
import Health from "../components/Health";
import Directory from "../components/Directory";
import Library from "../components/Library";

const screenOptions = {
  headerShown: false,
};
const HomeStack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={Home} options={screenOptions} />
      <HomeStack.Screen name="src" component={SRC} options={screenOptions} />
      <HomeStack.Screen
        name="health"
        component={Health}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="library"
        component={Library}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="directory"
        component={Directory}
        options={screenOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
