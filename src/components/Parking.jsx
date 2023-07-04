import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import BackButton from "./BackButton";
import ParkingAvailabilityCard from "./ParkingAvailabilityCard";
import ParkingLotTickets from "./data/ParkingLotTickets";
import ParkingLotFilter from "./ParkingLotFilter";
const Parking = () => {
  const navigator = useNavigation();
  const [lotAvailability, setLotAvailability] = useState(null);

  useEffect(() => {
    const loadParkingLots = async () => {
      const result = await axios.get(process.env.PARKING_API);
      if (result) {
        setLotAvailability(result.data);
      }
    };
    if (lotAvailability == null) loadParkingLots();
    // console.log(lotAvailability);
  });
  return (
    <View className="flex flex-col justify-center items-center">
      <BackButton navigator={navigator} text="Back Parking" />
      <ParkingLotFilter />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        className="w-11/12"
      >
        {lotAvailability &&
          lotAvailability.map((lot, index) => {
            return (
              <ParkingAvailabilityCard
                key={index}
                name={lot.location_name}
                address={lot.location_address}
                totalSpace={lot.total_spaces}
                freeSpace={lot.free_spaces}
                ticket={ParkingLotTickets[lot.location_name]}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Parking;
