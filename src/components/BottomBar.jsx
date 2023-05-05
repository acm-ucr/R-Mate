import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeLine from '../../assets/home-line.svg';
import CalendarFilled from '../../assets/calendar-filled.svg';
import MapLine from '../../assets/map-line.svg';
import FormLine from '../../assets/form-line.svg';

const BottomBar = ({ state, navigation }) => {
  const homeScreen = state.routes[0];
  const eventsScreen = state.routes[1];
  const mapScreen = state.routes[2];
  const surveyScreen = state.routes[3];
  return (
    <View className="w-full h-20 flex flex-row justify-around gap-y-5 bg-white">
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(homeScreen.name);
        }}
      >
        <HomeLine />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(eventsScreen.name);
        }}
      >
        <CalendarFilled />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(mapScreen.name);
        }}
      >
        <MapLine />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(surveyScreen.name);
        }}
      >
        <FormLine />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
