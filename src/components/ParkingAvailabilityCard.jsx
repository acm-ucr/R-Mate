import { View, Text } from "react-native";
import React from "react";

const ParkingAvailabilityCard = ({
  name,
  address,
  totalSpace,
  freeSpace,
  ticket,
}) => {
  return (
    <View className="bg-white w-full my-2">
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{totalSpace}</Text>
      <Text>{freeSpace}</Text>
      <Text>{ticket}</Text>
    </View>
  );
};

export default ParkingAvailabilityCard;
