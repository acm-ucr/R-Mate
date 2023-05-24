import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";

const SRCFacilityCounts = () => {
  const navigator = useNavigation();
  return (
    <View>
      <BackButton text="back Facility Counts" navigator={navigator} />
      <Text>SRCFacilityCounts</Text>
    </View>
  );
};

export default SRCFacilityCounts;
