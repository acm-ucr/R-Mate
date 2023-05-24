import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Hours from "./SRCHourButton";
import BackButton from "./BackButton";
import SRCButton from "./SRCButton";
import { SafeAreaView } from "react-native-safe-area-context";
const SRC = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView className="flex flex-col items-center justify-center">
      <View className="flex flex-col w-11/12">
        <BackButton text="back SRC" navigator={navigator} />
        <Text>SRC</Text>
        <Hours />
        <SRCButton
          text="Today's Schedule"
          navigator={navigator}
          directTo="srcSchedule"
        />
        <SRCButton
          text="Programs"
          navigator={navigator}
          directTo="srcPrograms"
        />
        <SRCButton
          text="Facility Counts"
          navigator={navigator}
          directTo="srcFacilityCounts"
        />
        <SRCButton
          text="Make a Reservation"
          navigator={navigator}
          directTo="srcReservation"
        />
      </View>
    </SafeAreaView>
  );
};

export default SRC;
