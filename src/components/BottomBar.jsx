import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native-web';

const BottomBar = ({ state, navigation }) => {
  const homeScreen = state.routes[0];
  const eventsScreen = state.routes[1];
  const mapScreen = state.routes[2];
  const surveyScreen = state.routes[3];
  return (
    <View className="w-full flex flex-row justify-around rounded-3xl bg-white">
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(homeScreen.name);
        }}
      >
        <Image
          source={require('../../assets/home-line.svg')}
          className="m-5 w-16 h-16 border-1 rounded-full"
        />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(eventsScreen.name);
        }}
      >
        <Image
          source={require('../../assets/calendar-filled.svg')}
          className="m-5 w-16 h-16 border-1 rounded-full"
        />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(mapScreen.name);
        }}
      >
        <Image
          source={require('../../assets/map-line.svg')}
          className="m-5 w-16 h-16 border-1 rounded-full"
        />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(surveyScreen.name);
        }}
      >
        <Image
          source={require('../../assets/form-line.svg')}
          className="m-5 w-16 h-16 border-1 rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
