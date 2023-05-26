import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";

const SRCSchedule = () => {
  const navigator = useNavigation();
  return (
    <View>
      <BackButton text="back Today's Schedule" navigator={navigator} />
      <Text>SRCSchedule</Text>
    </View>
  );
};

export default SRCSchedule;
