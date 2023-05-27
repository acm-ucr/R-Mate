import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";

const SRCReservation = () => {
  const navigator = useNavigation();
  return (
    <View>
      <BackButton text="back Reservation" navigator={navigator} />
      <Text>SRCReservation</Text>
    </View>
  );
};

export default SRCReservation;
