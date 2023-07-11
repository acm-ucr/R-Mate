import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackButton from "./BackButton";
import ParkingAvailabilityCard from "./ParkingAvailabilityCard";
import ParkingLotTickets from "./data/ParkingLotTickets";
import ParkingLotFilter from "./ParkingLotFilter";
const Parking = () => {
  const navigator = useNavigation();

  return (
    <View className="flex flex-col justify-center items-center">
      <View className="w-11/12 mt-2 mb-2 flex-row">
        <BackButton navigator={navigator} text="Parking" />
      </View>
      <ParkingLotFilter />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        className="w-11/12"
      >
        {Object.entries(ParkingLotTickets).map(([key, value]) => (
          <ParkingAvailabilityCard
            key={key}
            name={key}
            address={value.address}
            zones={value.zones}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Parking;
