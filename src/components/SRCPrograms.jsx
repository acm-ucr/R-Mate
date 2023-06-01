import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";
import SRCDropdown from "./SRCDropdown";

const SRCPrograms = () => {
  const navigator = useNavigation();
  return (
    <View>
      <BackButton text="back Today's Schedule" navigator={navigator} />
      <SRCDropdown />
    </View>
  );
};

export default SRCPrograms;
