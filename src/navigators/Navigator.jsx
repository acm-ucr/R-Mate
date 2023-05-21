import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "../screens/home";
import events from "../screens/events";
import map from "../screens/map";
import surveys from "../screens/surveys";
import BottomBar from "../components/BottomBar";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import UCRNavbarLogo from "../../assets/UCRNavbarLogo.svg";
import ProfileSVG from "../../assets/profilePIC.svg";

const Navigator = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerTitle: () => (
      <View className="w-full h-full">
        <View className="absolute right-10 flex flex-row items-center">
          <UCRNavbarLogo width={124} height={37} />
        </View>
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileInformation")}
        title="Info"
        color="#fff"
      >
        <ProfileSVG width={84} height={38} />
      </TouchableOpacity>
    ),
  };
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="homeScreen" component={home} options={screenOptions} />
      <Tab.Screen name="events" component={events} options={screenOptions} />
      <Tab.Screen name="map" component={map} options={screenOptions} />
      <Tab.Screen name="survey" component={surveys} options={screenOptions} />
    </Tab.Navigator>
  );
};

export default Navigator;
