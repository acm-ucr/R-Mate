import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import SRC from "../components/SRC";
import Health from "../components/Health";
import Directory from "../components/Directory";
import Library from "../components/Library";
import Career from "../components/Career";
import Market from "../components/Market";
import ARC from "../components/ARC";
import Dining from "../components/Dining";
import Parking from "../components/Parking";
import SRCSchedule from "../components/SRCSchedule";
import SRCPrograms from "../components/SRCPrograms";
import SRCFacilityCounts from "../components/SRCFacilityCounts";
import SRCReservation from "../components/SRCReservation";

const screenOptions = {
  headerShown: false,
};
const HomeStack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={Home} options={screenOptions} />
      <HomeStack.Screen name="src" component={SRC} options={screenOptions} />
      <HomeStack.Screen name="arc" component={ARC} options={screenOptions} />
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
      <HomeStack.Screen
        name="career"
        component={Career}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="market"
        component={Market}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="dining"
        component={Dining}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="parking"
        component={Parking}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="srcSchedule"
        component={SRCSchedule}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="srcPrograms"
        component={SRCPrograms}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="srcFacilityCounts"
        component={SRCFacilityCounts}
        options={screenOptions}
      />
      <HomeStack.Screen
        name="srcReservation"
        component={SRCReservation}
        options={screenOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
