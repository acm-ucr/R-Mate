import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const BottomBar = ({ state, navigation }) => {
  const homeScreen = state.routes[0];
  const eventsScreen = state.routes[1];
  const mapScreen = state.routes[2];
  const surveyScreen = state.routes[3];
  return (
    <View className="w-full flex flex-row">
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(homeScreen.name);
        }}
      >
        <Text className="bg-red-500">home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(eventsScreen.name);
        }}
      >
        <Text className="bg-blue-500">events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(mapScreen.name);
        }}
      >
        <Text className="bg-green-500">map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(surveyScreen.name);
        }}
      >
        <Text className="bg-purple-500">survey</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
