import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MapSVG from "../../assets/map-filled.svg";

const ParkingAvailabilityCard = ({ name, address, zones }) => {
  return (
    <View className="w-full flex-row justify-center my-2 rounded-lg bg-rmate-white p-2">
      <View className="w-5/12 justify-center px-3">
        <Text className="text-rmate-blue text-lg font-poppins-500 ">
          {name}
        </Text>
        <Text className="text-red-500 text-lg font-poppins-500 ">
          {zones.map((zone) => zone)}
        </Text>
      </View>
      <View className="w-6/12 flex justify-evenly p-1 py-3">
        <Text className="text-small text-rmate-blue">{address} </Text>
      </View>
      <View className="w-1/12 flex justify-evenly p-1 py-3">
        <TouchableOpacity className=" w-5/6 flex flex-row items-center aspect-square justify-center bg-rmate-offwhite rounded-full">
          <MapSVG />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ParkingAvailabilityCard;
