import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HomeLine from "../../assets/home-line.svg";
import CalendarLine from "../../assets/calendar-line.svg";
import MapLine from "../../assets/map-line.svg";
import FormLine from "../../assets/form-line.svg";
import HomeFilled from "../../assets/home-filled.svg";
import CalendarFilled from "../../assets/calendar-filled.svg";
import MapFilled from "../../assets/map-filled.svg";
import FormFilled from "../../assets/form-filled.svg";

const BottomBar = ({ state, navigation }) => {
  const homeScreen = state.routes[0];
  const eventsScreen = state.routes[1];
  const mapScreen = state.routes[2];
  const surveyScreen = state.routes[3];
  const [onHome, setOnHome] = useState(true);
  const [onCalendar, setOnCalendar] = useState(false);
  const [onMap, setOnMap] = useState(false);
  const [onForm, setOnForm] = useState(false);

  const resetSVGS = () => {
    setOnHome(false);
    setOnCalendar(false);
    setOnMap(false);
    setOnForm(false);
  };

  return (
    <View className="w-full h-20 flex flex-row justify-around gap-y-5 bg-white">
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(homeScreen.name);
          resetSVGS();
          setOnHome(true);
        }}
      >
        {onHome ? <HomeFilled /> : <HomeLine />}
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(eventsScreen.name);
          resetSVGS();
          setOnCalendar(true);
        }}
      >
        {onCalendar ? <CalendarFilled /> : <CalendarLine />}
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(mapScreen.name);
          resetSVGS();
          setOnMap(true);
        }}
      >
        {onMap ? <MapFilled /> : <MapLine />}
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          navigation.navigate(surveyScreen.name);
          resetSVGS();
          setOnForm(true);
        }}
      >
        {onForm ? <FormFilled /> : <FormLine />}
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
